import classNames from "classnames/bind";

import Header from "~/layouts/components/Header/Header"
import styles from './DefaultLayout.module.scss'
import SideBar from "~/layouts/components/SideBar";
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>

        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;