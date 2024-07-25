import styles from './trash.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Trash() {
    return (
        <div className={cx('cont')}>
            <h1>Trash</h1>
        </div>
    );
}

export default Trash;