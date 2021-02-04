import app from 'flarum/app';
import SteamSettingsPage from './components/SteamSettingsPage';

app.initializers.add('nomiscz/flarum-ext-auth-steam', () => {
    app.extensionData.for('nomiscz-auth-steam').registerPage(SteamSettingsPage);
});
