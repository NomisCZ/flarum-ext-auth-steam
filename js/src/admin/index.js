import app from 'flarum/admin/app';

const providerLink = 'https://steamcommunity.com/dev/apikey';

app.initializers.add('nomiscz/flarum-ext-auth-steam', () => {
  app.extensionData
    .for('nomiscz-auth-steam')
    .registerSetting({
      setting: 'flarum-ext-auth-steam.api_key',
      label: app.translator.trans(`nomiscz-auth-steam.admin.settings.api_key_label`),
      help: app.translator.trans(`nomiscz-auth-steam.admin.settings.api_key_help`, {
        link: (
          <a href={providerLink} target="_blank">
            {providerLink}
          </a>
        ),
      }),
      type: 'text',
    })
    .registerSetting({
      setting: 'flarum-ext-auth-steam.use_steam_powered_domain',
      label: app.translator.trans('nomiscz-auth-steam.admin.settings.use_steam_powered_domain'),
      type: 'checkbox',
    });
});
