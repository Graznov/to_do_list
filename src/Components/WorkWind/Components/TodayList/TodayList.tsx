import styles from './list.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TodayList() {
    return (
        <div className={cx('cont')}>
            <h1>Today</h1>
        </div>
    );
}

export default TodayList;