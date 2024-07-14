import styles from './leftPanelBtn.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function LeftPanelBtn({text_btn, number, logo}) {
    return (
        <button classNameBtn={cx('button')}>
            <div className={cx('calendar_btn')}>
                {logo}
                {text_btn}
            </div>

            <div className={cx('calendar_btn_works')}>{number}</div>
        </button>
    );
}

export default LeftPanelBtn;