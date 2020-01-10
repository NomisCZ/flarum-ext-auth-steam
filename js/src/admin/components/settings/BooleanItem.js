import Switch from 'flarum/components/Switch';
import SettingItem from './SettingItem';

/**
 * @author Friends of Flarum - https://github.com/FriendsOfFlarum
 * @package https://github.com/FriendsOfFlarum/components
 */
export default class BooleanItem extends SettingItem {
    view() {
        return Switch.component({
            state: !!Number(this.getValue()),
            children: this.props.label || this.props.children,
            onchange: this.setting(),
        });
    }
}
