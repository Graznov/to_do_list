// import React from 'react';
import styles from './leftPanelBtn.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function LeftPanelBtn({path_img, text_btn, number}) {
    return (
        <button className={cx('button')}>
            <div className={cx('calendar_btn')}>
                <img className={cx('calendar_btn_SVG')} src={path_img} alt="ico"/>
                {text_btn}
            </div>

            <div className={cx('calendar_btn_works')}>{number}</div>
        </button>
    );
}

export default LeftPanelBtn;