import { settings } from '@fof-components';
import ExtensionPage from 'flarum/components/ExtensionPage';

const {
    items: { BooleanItem, StringItem },
} = settings;

export default class SteamSettingsPage extends ExtensionPage  {
    oninit(vnode) {
        super.oninit(vnode);
        this.setting = this.setting.bind(this);
    }

    content() {
        return [
            <div className="SteamAuthSettingsPage">
                <div className="container">
                    <div className="Form-group">
                        <StringItem
                            name={'flarum-ext-auth-steam.api_key'}
                            setting={this.setting}
                            {...{ ['required']: true }}
                        >
                            {app.translator.trans(`nomiscz-auth-steam.admin.settings.api_key_label`)}
                        </StringItem>
                    </div>
                    <div className="Form-group">
                        <BooleanItem name={'flarum-ext-auth-steam.use_steam_powered_domain'} setting={this.setting}>
                            <span>{app.translator.trans('nomiscz-auth-steam.admin.settings.use_steam_powered_domain')}</span>
                        </BooleanItem>
                    </div>
                    {this.submitButton()}
                </div>
            </div>
        ];
    }
}
