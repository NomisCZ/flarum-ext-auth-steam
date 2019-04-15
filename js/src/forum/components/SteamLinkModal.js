import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

// TODO change trans key ...
export default class SteamLinkModal extends Modal {
    className() {
        return 'AuthSteamLinkModal Modal--small';
    }

    title() {
        return 'Link Steam Account'; // TODO app.translator.trans(...)
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div className="Form-group">
                        {Button.component({
                            className: 'Button LogInButton--steam',
                            icon: 'fab fa-steam-symbol',
                            loading: this.loading,
                            children: app.translator.trans('flarum-ext-auth-steam.forum.log_in.with_steam_button'), // TODO app.translator.trans(...)
                            onclick: () => this.showSteamLogin()
                        })}
                    </div>
                </div>
            </div>
        );
    }

    showSteamLogin() {

        const width = 600;
        const height = 400;
        const $window = $(window);

        window.open(app.forum.attribute('apiUrl') + '/auth/steam/link', 'steamLinkPopup',
            `width=${width},` +
            `height=${height},` +
            `top=${$window.height() / 2 - height / 2},` +
            `left=${$window.width() / 2 - width / 2},` +
            'status=no,scrollbars=no,resizable=no');
    }
}