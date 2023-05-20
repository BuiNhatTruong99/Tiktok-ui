import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    ActiveHomeIcon,
    UserGroupIcon,
    ActiveUserGroupIcon,
    LiveIcon,
    ActiveLiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<ActiveHomeIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<ActiveUserGroupIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<ActiveLiveIcon />} />
            </Menu>
            <SuggestedAccounts lable="Suggested accounts" />
            <SuggestedAccounts lable="Following accounts" />
        </aside>
    );
}

export default SideBar;
