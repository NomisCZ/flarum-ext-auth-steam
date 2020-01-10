import Component from 'flarum/Component';

/**
 * @author Friends of Flarum - https://github.com/FriendsOfFlarum
 * @package https://github.com/FriendsOfFlarum/components
 */
export default class SettingItem extends Component {
    init() {
        this.key = this.props.key;
        this.cast = this.props.cast || (a => a);
    }

    setting() {
        return app.modal.component.setting(this.key);
    }

    getValue() {
        return this.cast(this.setting()());
    }
}
