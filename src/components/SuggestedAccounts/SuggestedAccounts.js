import style from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(style);

function SuggestedAccounts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{lable}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('see-all')}>See all</p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
