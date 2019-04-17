import SettingsModal from 'flarum/components/SettingsModal';

export default class SteamSettingsModal extends SettingsModal {
    className() {
        return 'AuthSteamSettingsModal Modal--small';
    }

    title() {
        return app.translator.trans('nomiscz-auth-steam.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>{app.translator.trans('nomiscz-auth-steam.admin.settings.api_key_label')}</label>
                <input className="FormControl" bidi={this.setting('flarum-ext-auth-steam.api_key')}/>
            </div>,
        ];
    }
}