import styles from './workWind.module.css'
import classNames from "classnames/bind";
import LeftPanelBtn from "./Components/LeftPanelBtn/LeftPanelBtn.tsx";
import UserName from "./Components/UserName/UserName.tsx";
import {ReactComponent as LogoOne} from "/src/assets/one.svg";
import {ReactComponent as LogoSeven} from "/src/assets/Seven.svg";
import {ReactComponent as LogoAll} from "/src/assets/All.svg";
import {ReactComponent as LogoPlus} from "/src/assets/plus.svg";
import {ReactComponent as LogoCompleted} from "/src/assets/completed.svg";
import {ReactComponent as LogoTrash} from "/src/assets/trash.svg";


const cx = classNames.bind(styles);

function WorkWind() {

    const arr = ['Personal', 'Work', 'Education', 'Hobby', 'Prog', 'Games']

    return (
        <div className={cx('work_container')}>

            <div className={cx('work_container_leftPanel')}>

                <div className={cx('work_container_leftPanel_Top')}>
                    <UserName
                        pathAvaImg={'./public/user_avatar.jpeg'}
                        userName={'User01'}/>

                </div>

                <div className={cx('work_container_leftPanel_calendar')}>

                    <LeftPanelBtn
                        logo={<LogoOne className={cx('logogo')}
                                       width={'30px'}
                                       heidth={'30px'}/>}
                        text_btn={'Today'}
                        number={13}/>

                    <LeftPanelBtn
                        logo={<LogoSeven className={cx('logogo')}
                                         width={'30px'}
                                         heidth={'30px'}/>}
                        text_btn={'Next 7 days'}
                        number={13}/>

                    <LeftPanelBtn
                        logo={<LogoAll className={cx('logogo')}
                                       width={'30px'}
                                       heidth={'30px'}/>}

                        text_btn={'All'}
                        number={13}/>

                </div>

                <div className={cx('work_container_leftPanel_TagsList')}>

                    <LeftPanelBtn className={cx('MyListBtn')}
                                  logo2={<LogoPlus className={cx('logogo')}
                                                   width={'30px'}
                                                   heidth={'30px'}/>}
                                  text_btn={'My List'}/>

                    <div className={cx('tags')}>

                        {
                            arr.map((title) => (
                                <button key={title}>{title}</button>
                            ))
                        }
                    </div>


                </div>

                <div className={cx('completed')}>
                    <LeftPanelBtn className={cx('MyListBtn')}
                                  logo={<LogoCompleted className={cx('logogo')}
                                                   width={'25px'}
                                                   heidth={'25px'}/>}
                                  text_btn={'Completed'}/>
                    <LeftPanelBtn className={cx('MyListBtn')}
                                  logo={<LogoTrash className={cx('logogo')}
                                                   width={'30px'}
                                                   heidth={'30px'}/>}
                                  text_btn={'Trash'}/>
                </div>


            </div>

            <div className={cx('work_container_rightPanel')}>

            </div>

        </div>
    );
}

export default WorkWind;
