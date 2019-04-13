import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('flarum-ext-auth-steam', () => {
    extend(LogInButtons.prototype, 'items', function(items) {
        items.add('steam',
            <LogInButton
                className="Button LogInButton--steam"
                icon="fab fa-steam-symbol"
                path="/auth/steam">
                {app.translator.trans('flarum-ext-auth-steam.forum.log_in.with_steam_button')}
            </LogInButton>
        );
    });
});