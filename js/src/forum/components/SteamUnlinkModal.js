import app from 'flarum/forum/app';
import Modal from 'flarum/components/common/Modal';
import Button from 'flarum/components/common/Button';

export default class SteamUnlinkModal extends Modal {
  className() {
    return 'AuthSteamUnlinkModal Modal--small';
  }

  title() {
    return app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.title');
  }

  content() {
    const {
      data: {
        attributes: {
          SteamAuth: { providersCount = 0 },
        },
      },
    } = app.session.user;

    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group" id="submit-button-group">
            <h3>{app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.info.confirm')}</h3>
            {providersCount <= 1 ? (
              <p className="SteamText--danger">
                <i className="fas fa-exclamation-triangle fa-fw" />
                <b>{app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.info.no_providers')}</b>
              </p>
            ) : (
              ''
            )}
            <br />
            <div className="ButtonGroup">
              <Button type={'submit'} className={'Button SteamButton--danger'} icon={'fas fa-exclamation-triangle'} loading={this.loading}>
                {app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.buttons.confirm')}
              </Button>
              <Button className={'Button Button--primary'} icon={'fas fa-exclamation-triangle'} onclick={() => this.hide()} disabled={this.loading}>
                {app.translator.trans('nomiscz-auth-steam.forum.modals.unlink.buttons.cancel')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    let alert;

    e.preventDefault();
    this.loading = true;

    app
      .request({
        method: 'POST',
        url: app.forum.attribute('apiUrl') + '/auth/steam/unlink',
      })
      .then(() => {
        app.session.user.savePreferences();
        this.hide();
        alert = app.alerts.show({ type: 'success' }, app.translator.trans('nomiscz-auth-steam.forum.alerts.unlink_success'));
      });

    setTimeout(() => {
      app.alerts.dismiss(alert);
    }, 5000);
  }
}
