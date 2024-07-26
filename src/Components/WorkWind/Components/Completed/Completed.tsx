import styles from '../TodayList/list.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Completed() {
    return (
        <div className={cx('cont')}>
            <h1>Completed</h1>
        </div>
    );
}

export default Completed;