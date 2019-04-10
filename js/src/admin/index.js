import app from 'flarum/app';
import SteamSettingsModal from './components/SteamSettingsModal';

app.initializers.add('nomiscz-auth-steam', () => {
    app.extensionSettings['nomiscz-auth-steam'] = () => app.modal.show(new SteamSettingsModal());
});