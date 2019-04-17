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
                        children: app.translator.trans('nomiscz-auth-steam.forum.alerts.already_linked'),
                    })
                );
                break;
            case 'already_used':
                app.alerts.show(
                    alert = new Alert({
                        type: 'error',
                        children: app.translator.trans('nomiscz-auth-steam.forum.alerts.already_used'),
                    })
                );
                break;
            case 'done':
                app.modal.close();
                app.session.user.savePreferences();
                app.alerts.show(
                    alert = new Alert({
                        type: 'success',
                        children: app.translator.trans('nomiscz-auth-steam.forum.alerts.link_success'),
                    })
                );
                break;
            case 'error':
                app.alerts.show(
                    alert = new Alert({
                        type: 'error',
                        children: app.translator.trans('nomiscz-auth-steam.forum.alerts.error'),
                    })
                );
                break;
        }

        setTimeout(() => {
            app.alerts.dismiss(alert);
        }, 8000);
    }
}