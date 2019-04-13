<?php

namespace NomisCZ\SteamAuth;

use Exception;
use Flarum\Forum\Auth\Registration;
use Flarum\Forum\Auth\ResponseFactory;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class SteamAuthController implements RequestHandlerInterface
{
    protected $response;
    protected $steam;

    public function __construct(ResponseFactory $response, SteamAuth $steam)
    {
        $this->response = $response;
        $this->steam = $steam;
    }

    /**
     * @param Request $request
     * @return ResponseInterface
     * @throws Exception
     */
    public function handle(Request $request) : ResponseInterface
    {
        $this->steam->setRequest($request);

        if ($this->steam->validate()) {

            $steamUserInfo = $this->steam->getUserInfo();

            if ($steamUserInfo) {

                $suggestions = [
                    'id' => $steamUserInfo->steamid,
                    'personaName' => $steamUserInfo->personaname,
                    'avatarUrl' => $steamUserInfo->avatarfull,
                ];

                return $this->response->make(
                    'steam', $suggestions['id'],
                    function (Registration $registration) use ($suggestions) {
                        $registration
                            ->provideAvatar($suggestions['avatarUrl'])
                            ->suggestUsername($suggestions['personaName'])
                            ->setPayload($suggestions);
                    }
                );
            }
        }

        return $this->steam->redirect();
    }
}