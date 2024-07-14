import styles from './workWind.module.css'
import classNames from "classnames/bind";
import LeftPanelBtn from "./Components/LeftPanelBtn/LeftPanelBtn.tsx";
import UserName from "./Components/UserName/UserName.tsx";
import {ReactComponent as LogoOne} from "/src/assets/one.svg";
import {ReactComponent as LogoSeven} from "/src/assets/Seven.svg";
import {ReactComponent as LogoAll} from "/src/assets/All.svg";


const cx = classNames.bind(styles);

function WorkWind() {



    return (
        <div className={cx('work_container')}>

            <div className={cx('work_container_leftPanel')}>

                <div className={cx('work_container_leftPanel_Top')}>
                    <UserName
                        pathAvaImg={'./public/user_avatar.jpeg'}
                        userName={'User01'}/>

                </div>

                <div className={cx('work_container_leftPanel_calendar')}>

                    <LeftPanelBtn className={cx('button')}

                        text_btn={'Today'}
                        number={13}/>

                    <LeftPanelBtn


                        text_btn={'Next 7 days'}
                        number={13}/>

                    <LeftPanelBtn

                        text_btn={'All'}
                        number={13}/>

                </div>

                


            </div>

            <div className={cx('work_container_rightPanel')}>

                <LogoOne/>


            </div>

        </div>
    );
}

export default WorkWind;
