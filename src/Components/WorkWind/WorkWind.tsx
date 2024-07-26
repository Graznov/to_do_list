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
import {ReactComponent as LogoQuestion} from "/src/assets/question.svg";
// import {ReactComponent as LogoAlarm} from "src/assets/alarm_alert.svg";

import {Input} from "../ui-kit/Input.tsx";
import Btn from "../ui-kit/Btn.tsx";
import {Outlet} from "react-router-dom";


const cx = classNames.bind(styles);

function WorkWind() {

    const arr = ['Personal', 'Work', 'Education', 'Hobby', 'Prog', 'Games']
    const adres:string = 'src/assets/search.svg'
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
                        adress={'/workwindow/today'}
                        logo={<LogoOne className={cx('logogo')}
                                       width={'30px'}
                                       heidth={'30px'}/>}
                        text_btn={'Today'}
                        number={13}/>

                    <LeftPanelBtn
                        adress={'/workwindow/sevenDaysList'}
                        logo={<LogoSeven className={cx('logogo')}
                                         width={'30px'}
                                         heidth={'30px'}/>}
                        text_btn={'Next 7 days'}
                        number={13}/>

                    <LeftPanelBtn
                        adress={'/workwindow/alllist'}
                        logo={<LogoAll className={cx('logogo')}
                                       width={'30px'}
                                       heidth={'30px'}/>}

                        text_btn={'All'}
                        number={13}/>

                </div>

                <div className={cx('work_container_leftPanel_TagsList')}>

                    <LeftPanelBtn

                        className={cx('MyListBtn')}
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
                    <LeftPanelBtn
                        adress={'/workwindow/completed'}
                        className={cx('MyListBtn')}
                                  logo={<LogoCompleted className={cx('logogo')}
                                                   width={'25px'}
                                                   heidth={'25px'}/>}
                                  text_btn={'Completed'}/>
                    <LeftPanelBtn
                        adress={'/workwindow/trash'}                        className={cx('MyListBtn')}
                                  logo={<LogoTrash className={cx('logogo')}
                                                   width={'30px'}
                                                   heidth={'30px'}/>}
                                  text_btn={'Trash'}/>
                </div>


            </div>

            <div className={cx('work_container_rightPanel')}>
                <div className={cx('head')}>
                    <Input
                        name='search'
                        // onBlur={e => blurHandler(e)}
                        // onChange={changePassOne}
                        classNameContainer={cx('inputContainer')}
                        classNameLabel={cx('searchLabel')}
                        classNameInput={cx('searchInput')}
                        placeholder=''
                        // type={isShown ? "text" : "password"}
                        hidden='Search'
                        // ClassDivError={cx('ClassDivError',{
                        //     ClassDivErrorVisibl:passOneDirty
                        // })}
                        // message={passOneError}
                        //
                        // onClickBtn={isShowChange}

                        classNameBtn={cx('searchBtn')}
                        src={adres}
                    />

                    <div className={cx('buttonArea')}>
                        <Btn
                            type={'button'}
                            ClassNameBtn={cx('headerBtn')}
                            Btn_text={
                                <LogoQuestion className={cx('logogo')}
                                              width={'30px'}
                                              heidth={'30px'}/>

                                // <img src={'src/assets/question.svg'} alt='ask logo'/>
                            }/>
                        <Btn
                            type={'button'}
                            ClassNameBtn={cx('headerBtn')}
                            Btn_text={
                                <img src={'src/assets/alarm_alert.svg'} alt='ask logo'/>
                            }/>
                    </div>

                </div>

                <Outlet/>
                <LogoTrash className={cx('logogo')}
                           width={'30px'}
                           heidth={'30px'}/>
                {/*<LogoQuestion/>*/}
                {/*<LogoAlarm className={cx('logogo')}*/}
                {/*           width={'30px'}*/}
                {/*           heidth={'30px'}/>*/}


            </div>

        </div>
    );
}

export default WorkWind;
