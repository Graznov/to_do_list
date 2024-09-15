import styles from './bigmac.module.css'
import classNames from "classnames/bind";
import {ReactComponent as LangLogo} from "/public/language.svg";
import {ReactComponent as SunLogo} from "/public/sun.svg";
import {ReactComponent as MoonLogo} from "/public/moon.svg";
import {useState} from "react";

const cx = classNames.bind(styles);


// type Props = {
//
// };

export function BibMac() {

    const [visible, setVisible] = useState(false);




    return (
            <div className={cx('list-container')}>
                <button
                    className={cx('more-button')}
                    aria-label="Menu Button"
                    onClick={()=>{
                        setVisible(!visible)
                    }}>
                    <div className={cx('menu-icon-wrapper')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                             className={cx('feather feather-settings')}>
                            <circle cx="12" cy="12" r="3"/>
                            <path
                                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
                        </svg>
                    </div>
                </button>
                <div className={cx('more-button-list', {
                    'more-button-list-Active':visible
                })}>
                    <div className={cx('more-button-list-item')}>

                        <button>
                            <div>RUS</div>
                            <LangLogo className={cx('logogo', 'logo-Active')}/>
                            <div>ENG</div>
                        </button>
                    </div>
                    <div className={cx('more-button-list-item')}>
                        <button>
                            <SunLogo className={cx('logogo', 'logo-Active')}/>
                            <div>THEME</div>
                            <MoonLogo className={cx('logogo', 'logo-Active')}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    ;
};