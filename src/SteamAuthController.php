<?php

namespace NomisCZ\SteamAuth;

use Exception;
use Flarum\Forum\Auth\Registration;
use Flarum\Forum\Auth\ResponseFactory;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\RedirectResponse;
use Zend\Diactoros\Uri;
use GuzzleHttp\Client;

class SteamAuthController implements RequestHandlerInterface
{
    protected $response;
    protected $settings;

    public function __construct(ResponseFactory $response, SettingsRepositoryInterface $settings)
    {
        $this->response = $response;
        $this->settings = $settings;
    }

    /**
     * @param Request $request
     * @return ResponseInterface
     * @throws Exception
     * @author Sajjad Hashemian - sijad
     */
    public function handle(Request $request) : ResponseInterface
    {
        $redirectUri = $request->getAttribute('originalUri', $request->getUri())->withQuery('');
        $queryParams = $request->getQueryParams();
        $oidSig = array_get($queryParams, 'openid_sig');
        if (! $oidSig) {
            // redirect user to steam to get one.
            $redirectUri = $request->getAttribute('originalUri', $request->getUri())->withQuery('');
            $query = http_build_query(
                [
                    'openid.ns' => 'http://specs.openid.net/auth/2.0',
                    'openid.mode' => 'checkid_setup',
                    'openid.identity' => 'http://specs.openid.net/auth/2.0/identifier_select',
                    'openid.claimed_id' => 'http://specs.openid.net/auth/2.0/identifier_select',
                    'openid.return_to' => (string) $redirectUri,
                    'openid.realm' => (string) $redirectUri->withPath(''),
                ]
            );
            $uri = (string) (new Uri(self::LOGIN_URL))->withQuery($query);
            return new RedirectResponse($uri);
        }
        $query = [
            'openid.ns' => 'http://specs.openid.net/auth/2.0',
            'openid.sig' => array_get($queryParams, 'openid_sig'),
        ];
        $params = explode(',', array_get($queryParams, 'openid_signed'));
        foreach ($params as $param) {
            $query['openid.'.$param] = array_get($queryParams, 'openid_'.$param);
        }
        $query['openid.mode'] = 'check_authentication';
        $client = new Client();
        try {
            $res = $client->request('POST', SteamAuthController::LOGIN_URL, [
                'form_params' => $query
            ]);
        } catch (Exception $e) {
            return new Response("Can't connect to OpenID server.", 500);
        }
        $steamId = basename(array_get($queryParams, 'openid_claimed_id', ''));

        if ($res->getStatusCode() === 200
            && preg_match("/^is_valid:true+$/im", (string) $res->getBody()) === 1
            && $steamId
            && is_numeric($steamId)) {
            try {
                $res = $client->request(
                    'GET',
                    SteamAuthController::API_URL,
                    [
                        'query' => [
                            'key' => $this->settings->get('flarum-ext-auth-steam.api_key'),
                            'steamids' => $steamId,
                        ]
                    ]
                );
                $info = json_decode((string) $res->getBody(), true);
                if ($info) {
                    $suggestions = [
                        'steamId' => array_get($info, 'response.players.0.steamid'),
                        'username' => array_get($info, 'response.players.0.personaname'),
                        'avatar' => array_get($info, 'response.players.0.avatarfull'),
                    ];
                    return $this->response->make(
                        'steam', $suggestions['steamId'],
                        function (Registration $registration) use ($suggestions, $steamId) {
                            $registration
                                ->suggest('steamid', $suggestions['steamId'])
                                ->provideAvatar($suggestions['avatar'])
                                ->suggestUsername($suggestions['username'])
                                ->setPayload($suggestions);
                        }
                    );
                }
            } catch (Exception $e) { }
        }
        throw new Exception("Can't Get User Info.");

        /*if ($steamAuthClient->loggedIn()) {
            return $this->response->make(
                'steam', $steamAuthClient->steamid,
                function (Registration $registration) use ($steamAuthClient) {
                    $registration
                        ->suggest('steamid', $steamAuthClient->steamid)
                        ->provideAvatar($steamAuthClient->avatarfull)
                        ->suggestUsername($steamAuthClient->personaname)
                        ->setPayload(get_object_vars($steamAuthClient));
                }
            );
        }*/
    }
}