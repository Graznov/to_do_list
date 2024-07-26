import styles from '../TodayList/list.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SevenDaysList() {
    return (
        <div className={cx('cont')}>
            <h1>7 days</h1>
        </div>
    );
}

export default SevenDaysList;