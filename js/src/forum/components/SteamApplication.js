import ForumApplication from 'flarum/ForumApplication'
import Alert from 'flarum/components/Alert';

export default class SteamApplication extends ForumApplication
{
    steamLinkComplete(returnCode) {

        let alert;

        switch (returnCode) {

            case 'already_linked':
                app.modal.close();
                app.alerts.show(
                    alert = new Alert({
                        type: 'error',
                        children: 'Steam account is already linked!' // TODO app.translator.trans(...)
                    })
                );
                break;
            case 'already_used':
                app.alerts.show(
                    alert = new Alert({
                        type: 'error',
                        children: 'Steam account is already linked to another user!' // TODO app.translator.trans(...)
                    })
                );
                break;
            case 'done':
                app.modal.close();
                app.session.user.savePreferences();
                app.alerts.show(
                    alert = new Alert({
                        type: 'success',
                        children: 'Steam account link successful.' // TODO app.translator.trans(...)
                    })
                );
                break;
            case 'error':
                app.alerts.show(
                    alert = new Alert({
                        type: 'error',
                        children: 'Something went wrong, please try again later!' // TODO app.translator.trans(...)
                    })
                );
                break;
        }

        setTimeout(() => {
            app.alerts.dismiss(alert);
        }, 8000);
    }
}