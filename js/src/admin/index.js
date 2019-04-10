import app from 'flarum/app';

import SteamSettingsModal from './components/SteamSettingsModal';

app.initializers.add('flarum-ext-auth-steam', () => {
    app.extensionSettings['flarum-ext-auth-steam'] = () => app.modal.show(new SteamSettingsModal());
});