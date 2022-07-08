import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import Button from 'flarum/components/common/Button';
import LogInButtons from 'flarum/components/forum/LogInButtons';
import LogInButton from 'flarum/components/forum/LogInButton';
import SteamApplication from './components/SteamApplication';
import SteamUnlinkModal from './components/SteamUnlinkModal';
import SteamLinkModal from './components/SteamLinkModal';

app.initializers.add('nomiscz-auth-steam', () => {
  extend(SettingsPage.prototype, 'accountItems', (items) => {
    const {
      data: {
        attributes: {
          SteamAuth: { isLinked = false },
        },
      },
    } = app.session.user;

    items.add(
      'linkSteam',
      <Button
        className={`Button SteamButton--${isLinked ? 'danger' : 'success'}`}
        icon={'fab fa-steam-symbol'}
        path={`/auth/${name}`}
        onclick={() => app.modal.show(isLinked ? SteamUnlinkModal : SteamLinkModal)}
      >
        {app.translator.trans(`nomiscz-auth-steam.forum.buttons.${isLinked ? 'unlink' : 'link'}`)}
      </Button>
    );
  });

  extend(LogInButtons.prototype, 'items', (items) => {
    items.add(
      'steam',
      <LogInButton className={'Button LogInButton--steam'} icon={'fab fa-steam-symbol'} path={'/auth/steam'}>
        {app.translator.trans('nomiscz-auth-steam.forum.buttons.login')}
      </LogInButton>
    );
  });
});

app.steam = new SteamApplication();
