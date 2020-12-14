import { settings } from '@fof-components';
import SettingsModal from 'flarum/components/SettingsModal';

const {
    items: { StringItem },
} = settings;

export default class SteamSettingsModal extends SettingsModal {
    oninit(vnode) {
        super.oninit(vnode);
        this.setting = this.setting.bind(this);
    }

    className() {
        return 'AuthSteamSettingsModal Modal--small';
    }

    title() {
        return app.translator.trans('nomiscz-auth-steam.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <StringItem
                    name={'flarum-ext-auth-steam.api_key'}
                    setting={this.setting}
                    {...{ ['required']: true }}
                >
                    {app.translator.trans(`nomiscz-auth-steam.admin.settings.api_key_label`)}
                </StringItem>
            </div>,
            <div className="Form-group">
                <StringItem 
                    name={'flarum-ext-auth-steam.endpoint'}
                    setting={this.setting}
                >
                    {app.translator.trans('nomiscz-auth-steam.admin.settings.endpoint')}
                </StringItem>
            </div>
        ];
    }
}
