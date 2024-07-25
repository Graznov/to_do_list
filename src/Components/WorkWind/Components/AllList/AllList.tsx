import styles from './allList.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function AllList() {
    return (
        <div className={cx('cont')}>
            <h1>All</h1>
        </div>
    );
}

export default AllList;