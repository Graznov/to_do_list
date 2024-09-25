import styles from './workWind.module.css'
import classNames from "classnames/bind";
import LeftPanelBtn from "./Components/LeftPanelBtn/LeftPanelBtn.tsx";
import UserName from "./Components/UserName/UserName.tsx";
import {ReactComponent as LogoOne} from "/src/assets/one.svg";
import {ReactComponent as LogoSeven} from "/src/assets/Seven.svg";
import {ReactComponent as LogoAll} from "/src/assets/All.svg";
import {ReactComponent as LogoCompleted} from "/src/assets/completed.svg";
import {ReactComponent as LogoTrash} from "/src/assets/trash.svg";
import {ReactComponent as LogoSearch} from "/src/assets/search.svg";
import {ReactComponent as LogoQuestion} from "/src/assets/question.svg";
import {ReactComponent as LogoAlarm} from "/src/assets/alarm_alert.svg";

import {Input} from "../ui-kit/Input.tsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {AddTaskWindow} from "./Components/AddTaskWindow/AddTaskWindow.tsx";
import {useAppDispatch, useAppSelector} from "../../Store/hooks.ts";
import {
    changeTaskList,
    plusTag, setAdaptiveVisible,
    setNumberTasksMenu, setSearchStatus, setStyleSearchList, setStyleTagActive,
    styleVisibleAddTask
} from "../../Store/styleSlise.ts";
import {Task} from "../../Store/defSlice.ts";
import Btn from "../ui-kit/Btn.tsx";
import {eng} from "../../Store/En.ts";
import {russ} from "../../Store/Ru.ts";

const cx = classNames.bind(styles);


function WorkWind() {
    const dispatch = useAppDispatch()
    const list = useAppSelector(state => state.defSlice.tasks)
    const styleWindAddTask = useAppSelector(state => state.styleSlice.visibleAddTask)
    const arrayTags = useAppSelector(state => state.styleSlice.tags)
    const numberTasksMenu = useAppSelector(state => state.styleSlice.numberTasksMenu)
    const listName = useAppSelector(state => state.styleSlice.listTasks)
    const ActyveTag = useAppSelector(state => state.styleSlice.styleTagActive)
    const styleAdaptiveVisible = useAppSelector(state => state.styleSlice.styleAdaptiveVisible)

    const lang = useAppSelector(state => state.styleSlice.language)
    // const lang = localStorage.getItem('lang')

    // console.log(lang)

    // localStorage.clear()


    useEffect(() => {
        list.forEach((e:Task)=> dispatch(plusTag(e.category)))
        dispatch(setNumberTasksMenu(list))
    }, [dispatch, list]);

    const [searchInput, setSearchInput] = useState('');

    const [pushed, setPushed] = useState(false)

    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/workwindow/today')
    },[navigate])

    const clickAddTask = () => {
        dispatch(styleVisibleAddTask(true))
    }
    let searchTaskArr:Array<Task> = []

    const langMap = lang === 'ru' ? russ:eng


    return (


        <>

            <div className={cx('work_container',{
                'work_container_opasity':styleWindAddTask
            })}>

                <div className={cx('work_container_leftPanel',{
                    work_container_PanelDeactive:styleWindAddTask,
                    'work_container_leftPanel_Adaptive_Visible':styleAdaptiveVisible
                })}>

                    <div className={cx('work_container_leftPanel_Top')}>
                        <UserName
                            pathAvaImg={'https://banner2.cleanpng.com/lnd/20240527/ioh/axd6r2bt0.webp'}
                            userName={'User01'}/>
                    </div>

                    <div className={cx('work_container_leftPanel_calendar')}>

                        <LeftPanelBtn
                            className={cx('button',{
                                'MyListBtn_Active':listName==='Today'
                            })}
                            Click={()=>{
                                dispatch(changeTaskList('Today'))
                                dispatch(setSearchStatus(false))
                                dispatch(setStyleSearchList([]))
                                setSearchInput('')
                            }}
                            adress={'/workwindow/today'}
                            logo={<LogoOne className={cx('logogo')}
                                           width={'30px'}
                                           heidth={'30px'}/>}

                            // text_btn={(lang==='en')?Language.en.today:Language.ru.today}
                            text_btn={langMap.today}

                            number={numberTasksMenu.today.toString()}
                            logo2={undefined}/>

                        <LeftPanelBtn
                            className={cx('button',{
                                'MyListBtn_Active':listName==='Next 7 days'
                            })}
                            Click={()=>{
                                dispatch(changeTaskList('Next 7 days'))
                                dispatch(setSearchStatus(false))
                                dispatch(setStyleSearchList([]))
                                setSearchInput('')
                                // dispatch(setStyleTagActive(undefined))

                            }}
                            logo2={undefined}
                            adress={'/workwindow/sevenDaysList'}
                            logo={<LogoSeven className={cx('logogo')}
                                             width={'30px'}
                                             heidth={'30px'}/>}
                            text_btn={langMap.nextSevenDays}
                            number={numberTasksMenu.sevenDays.toString()}/>

                        <LeftPanelBtn
                            className={cx('button',{
                                'MyListBtn_Active':listName==='All'
                            })}
                            Click={()=>{
                                dispatch(changeTaskList('All'))
                                dispatch(setSearchStatus(false))
                                dispatch(setStyleSearchList([]))
                                setSearchInput('')
                            }}
                            adress={'/workwindow/alllist'}
                            logo={<LogoAll className={cx('logogo')}
                                           width={'30px'}
                                           heidth={'30px'}/>}

                            text_btn={langMap.all}
                            number={numberTasksMenu.all.toString()}
                            logo2={undefined}/>

                    </div>

                    <div className={cx('work_container_leftPanel_TagsList')}>

                        <h2 className={cx('MyList')}>{langMap.myList}</h2>

                        <div className={cx('tags')}>

                            {
                                arrayTags.map((title:string) =>

                                    <div
                                        key={title}
                                        className={cx('tag', {
                                        'MyListBtn_Active':ActyveTag.includes(title)
                                    })}>
                                        <LeftPanelBtn

                                            Click={()=>{
                                                dispatch(setStyleTagActive(title))
                                                dispatch(setSearchStatus(false))
                                                dispatch(setStyleSearchList([]))
                                                setSearchInput('')
                                            }}

                                            key={title}
                                            text_btn={title}
                                            adress={`/workwindow/tags`}
                                            className={undefined}
                                            number={undefined}
                                            logo={undefined}
                                            logo2={undefined}
                                        />
                                    </div>

                                )
                            }
                        </div>


                    </div>

                    <div className={cx('completed')}>
                        <LeftPanelBtn
                            className={cx('button',{
                                'MyListBtn_Active':listName==='Completed'
                            })}
                            Click={()=>{
                                dispatch(changeTaskList('Completed'))
                                dispatch(setSearchStatus(false))
                                dispatch(setStyleSearchList([]))
                                setSearchInput('')
                            }}
                            adress={'/workwindow/completed'}
                            logo={<LogoCompleted className={cx('logogo')}
                                                       width={'25px'}
                                                       heidth={'25px'}/>}
                            text_btn={langMap.completed}
                            number={numberTasksMenu.completed.toString()}
                            logo2={undefined}/>
                        <LeftPanelBtn
                            className={cx('button',{
                                'MyListBtn_Active':listName==='Trash'
                            })}
                            Click={()=>{
                                dispatch(changeTaskList('Trash'))
                                dispatch(setSearchStatus(false))
                                dispatch(setStyleSearchList([]))
                                setSearchInput('')
                            }}
                            adress={'/workwindow/trash'}
                                      logo={<LogoTrash className={cx('logogo')}
                                                       width={'30px'}
                                                       heidth={'30px'}/>}
                                      text_btn={langMap.trash}
                            number={numberTasksMenu.trash.toString()}
                            logo2={undefined}/>

                    </div>


                </div>

                <div className={cx('work_container_rightPanel',{
                    work_container_PanelDeactive:styleWindAddTask
                })}>
                    <div className={cx('head')}>
                        <Input
                            name='search'
                            classNameContainer={cx('inputContainer')}
                            classNameLabel={cx('searchLabel')}
                            classNameInput={cx('searchInput')}
                            placeholder=''
                            hidden={langMap.hiddenSearch}
                            classNameBtn={cx('searchBtn')}
                            BTNdisabled={true}
                            reactSvg={<LogoSearch/>}
                            value={searchInput}

                            onChange={(event)=>{

                                setSearchInput(event.target.value)
                                searchTaskArr = []
                                if (event.target.value.length > 1) {
                                    dispatch(setSearchStatus(true))
                                    list.forEach((elem)=>{
                                        if(elem.title.toLowerCase().includes(event.target.value.toLowerCase())){
                                            searchTaskArr.push(elem)
                                        }
                                    })
                                    dispatch(setStyleSearchList(searchTaskArr))
                                } else {
                                    dispatch(setSearchStatus(false))
                                }

                            }}

                            onClickBtn={()=>{
                                console.log('CLICK SEARCH')
                            }}/>

                        <div className={cx('buttonArea')}>
                            {/*<BibMac/>*/}
                            <Btn
                                type={'button'}
                                ClassNameBtn={cx('headerBtn')}
                                Btn_text={
                                    <LogoQuestion className={cx('logogo')}
                                                  width={'30px'}
                                                  heidth={'30px'}/>
                                }/>
                            <Btn
                                type={'button'}
                                ClassNameBtn={cx('headerBtn')}
                                Btn_text={
                                    <LogoAlarm className={cx('logogo')}
                                                  width={'30px'}
                                                  heidth={'30px'}/>
                                }/>
                        </div>

                    </div>

                    <Outlet/>


                    <div className={cx('floor')}>

                        <button
                            className={cx('btn', 'floorBtnMenu')}
                            onClick={() => {
                                console.log(styleAdaptiveVisible)
                                dispatch(setAdaptiveVisible(!styleAdaptiveVisible))
                                setPushed(!pushed)
                            }}>

                            <div className={cx("btn_line", "btn_1",{
                                'btn_1_Pushed':pushed
                            })}></div>
                            <div className={cx("btn_line", "btn_2",{
                                'btn_2_Pushed':pushed
                            })}></div>
                            <div className={cx("btn_line", "btn_3",{
                                'btn_3_Pushed':pushed
                            })}></div>

                        </button>

                        <button
                            onClick={clickAddTask}
                            className={cx('floorBtn')}>
                            {langMap.addTask}
                        </button>

                    </div>

                </div>

            </div>
                <AddTaskWindow/>
        </>
    );
}

export default WorkWind;
