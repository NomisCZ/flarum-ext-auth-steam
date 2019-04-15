import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import Alert from 'flarum/components/Alert';

// TODO change trans key ...
export default class SteamUnlinkModal extends Modal {
    className() {
        return 'AuthSteamUnlinkModal Modal--small';
    }

    title() {
        return 'Unlink Steam Account'; // TODO app.translator.trans(...)
    }

    content() {
        const {
            data: {
                attributes: {
                    SteamAuth: {
                        providersCount = 0
                    },
                },
            },
        } = app.session.user;

        // TODO app.translator.trans(...)
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div className="Form-group" id="submit-button-group">
                        <h3>Are you sure, you want unlink your Steam account?</h3>
                        {(providersCount <= 1)
                            ?
                            <p className="SteamText--danger"><i className="fas fa-exclamation-triangle fa-fw" />
                                <b>You don't have any others login providers! You'll probably have to reset your password.</b>
                            </p>
                            : ''
                        }
                        <br/>
                        <div className="ButtonGroup">
                            {Button.component({
                                type: 'submit',
                                className: 'Button SteamButton--danger',
                                icon: 'fas fa-exclamation-triangle',
                                loading: this.loading,
                                children: 'Yes, unlink account', // TODO app.translator.trans(...)
                            })}
                            {Button.component({
                                className: 'Button Button--primary',
                                children: 'No!', // TODO app.translator.trans(...)
                                disabled: this.loading,
                                onclick: () => this.hide()
                            })}
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

        app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/auth/steam/unlink',
            data: '',
        }).then(() => {
            app.alerts.show(
                alert = new Alert({
                    type: 'success',
                    children: 'Steam account unlink successful.' // TODO app.translator.trans(...)
                })
            );
            this.hide();
            app.session.user.savePreferences();
        });

        setTimeout(() => {
            app.alerts.dismiss(alert);
        }, 8000);
    }
}