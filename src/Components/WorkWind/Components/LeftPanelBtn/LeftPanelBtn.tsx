import styles from './leftPanelBtn.module.css'
import classNames from "classnames/bind";
import {NavLink} from "react-router-dom";

const cx = classNames.bind(styles);

function LeftPanelBtn({Click, adress, text_btn, number, logo, logo2}) {
    return (
        <NavLink to={adress}>
            <button onClick={Click} className={cx('button')}>
                <div className={cx('calendar_btn')}>
                    {logo}
                    {text_btn}
                </div>

                <div className={cx('calendar_btn_works')}>{number}</div>
                {logo2}
            </button>
        </NavLink>

    );
}

export default LeftPanelBtn;