import styles from './mission.module.css'
import classNames from "classnames/bind";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks.ts";
import {checkTask, defChangeTask, defDelitTask, Task} from "../../../../Store/defSlice.ts";
import {useState} from "react";
import {ReactComponent as LogoTrash} from "/src/assets/trash.svg";
import {ReactComponent as Pencil} from "/public/pencil.svg";
import {Language} from "../../../../Store/language.ts";

const cx = classNames.bind(styles);

interface MissionProps {
    tag:string,
    text:string,
    color:string,
    listName?:string,
    id:string,
    isCompleted:boolean
}

export function Mission({tag, text, color, listName, id, isCompleted}:MissionProps) {
    const lang = useAppSelector(state => state.styleSlice.language)
    // const lang = localStorage.getItem('lang')

    const list = useAppSelector(state => state.defSlice.tasks)
    const yourDate = new Date().toISOString().split('T')[0]

    const check = !!isCompleted
    const [vall, setVall] = useState({
        category:"___",
        color:"___",
        description:"___",
        dueDate:"0000-00-00",
        id:"___.",
        isCompleted:false,
        title:"___"
    })

    const [DeletedWind, setDeletedWind] = useState<boolean>(false)

    const [disabled, setDisabled] = useState<boolean>(true)

    const dispatch = useAppDispatch()

    const ClassTag:string = cx('missTag',{
        missTagRed:color==='red',
        missTagGreen:color==='green',
        missTagBlue:color==='blue',
        missTagYellow:color==='yellow',
        missTagPurple:color==='purple',
        missTagGray:color===''
    })
    const [isOpen, setIsOpen] = useState(false)

    let miss:Task

    return (
        
        <div className={cx('mission',{
            'mission-compl': isCompleted,
            'mission-trash':listName==='Trash',
            'opened':isOpen
        })}>
            <div className={cx('mission-top-cont')}>
                <label>
                    <input
                        checked={check}
                        className={cx('missCheck')}
                        onChange={() => {
                            dispatch(checkTask(id))
                        }}
                        type="checkbox"
                    />
                </label>
                <div
                    onClick={() => {
                        list.forEach((element) => {
                            if (element.id === id) miss=element
                        })
                        setIsOpen(!isOpen)
                        setDisabled(true)
                        setVall(miss)
                    }}
                    className={cx('mission-textContent')}
                >
                    <div className={ClassTag}>{tag}</div>
                    <div className={cx('missText')}>{text}</div>
                </div>
            </div>


            <div className={cx('missionChange', {
                'missionChangeActive': isOpen
            })}>
                <div className={cx('input-area_content',{

                })}>
                    <p>
                        {(lang==='en')?Language.en.change_task_wind_title:Language.ru.change_task_wind_title}
                    </p>
                    <input
                        className={cx({
                            'input-Disabled':disabled
                        })}
                        disabled={disabled}

                        onChange={(e) => {
                            setVall({
                                ...vall,
                                title: e.target.value
                            })
                        }}
                        value={vall.title}
                        type="text"/>
                </div>

                <div className={cx('input-area_content')}>
                    <p>
                        {(lang==='en')?Language.en.change_task_wind_tag:Language.ru.change_task_wind_tag}
                    </p>
                    <input
                        className={cx({
                            'input-Disabled':disabled
                        })}
                        disabled={disabled}

                        value={vall.category}
                        type="text"
                        onChange={(e) => {
                            setVall({
                                ...vall,
                                category: e.target.value
                            })
                        }}
                    />
                </div>


                <div className={cx('input-area_content')}>
                    <p>
                        {(lang==='en')?Language.en.change_task_wind_date:Language.ru.change_task_wind_date}
                    </p>
                    <input
                        className={cx({
                            'input-Disabled':disabled
                        })}
                        disabled={disabled}
                        value={vall.dueDate.split('T')[0]}
                        type="date"
                        min={yourDate}
                        onChange={(e) => {
                            setVall({
                                ...vall,
                                dueDate: e.target.value
                            })
                        }}/>
                </div>

                <div
                    className={cx('AddTaskContainerTop_colrs')}>
                    <p>
                        {(lang==='en')?Language.en.change_task_wind_color:Language.ru.change_task_wind_color}
                    </p>
                    <div

                        className={cx('AddTaskContainerTop_colrs_btnArea')}>
                        <button
                            disabled={disabled}
                            onClick={()=>{
                                setVall({
                                    ...vall,
                                    color: 'red'
                                })
                            }}
                            type='button'
                            className={cx('AddTaskContainerTop_colrs_btn', 'red', {
                                colorActive: vall.color === 'red'
                            })}>
                        </button>
                        <button
                            disabled={disabled}
                            onClick={()=>{
                                setVall({
                                    ...vall,
                                    color: 'green'
                                })
                            }}
                            type='button'
                            className={cx('AddTaskContainerTop_colrs_btn', 'green', {
                                    colorActive: vall.color === 'green'
                            })}>
                        </button>
                        <button
                            disabled={disabled}
                            onClick={()=>{
                                setVall({
                                    ...vall,
                                    color: 'blue'
                                })
                            }}
                            type='button'
                            className={cx('AddTaskContainerTop_colrs_btn', 'blue', {
                                colorActive: vall.color === 'blue'
                            })}>
                        </button>
                        <button
                            disabled={disabled}
                            onClick={()=>{
                                setVall({
                                    ...vall,
                                    color: 'yellow'
                                })
                            }}
                            type='button'
                            className={cx('AddTaskContainerTop_colrs_btn', 'yellow', {
                                colorActive: vall.color === 'yellow'
                            })}>
                        </button>
                        <button
                            disabled={disabled}
                            onClick={()=>{
                                setVall({
                                    ...vall,
                                    color: 'purple'
                                })
                            }}
                            type='button'
                            className={cx('AddTaskContainerTop_colrs_btn', 'purple', {
                                colorActive: vall.color === 'purple'
                            })}>
                        </button>
                    </div>
                </div>
                {(lang==='en')?Language.en.change_task_wind_description:Language.ru.change_task_wind_description}
                <textarea
                    disabled={disabled}
                    placeholder={(lang==='en')?Language.en.change_task_wind_descriptionPlacehold:Language.ru.change_task_wind_descriptionPlacehold}
                    rows={4}
                    value={vall.description}
                    onChange={(e) => {
                        setVall({
                            ...vall,
                            description: e.target.value
                        })
                    }}/>

                <div
                    className={cx('btnArea')}>
                    <button
                        onClick={() => {

                            if(disabled) {
                                setDisabled(false)
                            } else {
                                setDisabled(true)
                                dispatch(defChangeTask(vall))
                                setIsOpen(!isOpen)
                            }


                        }}>
                        <Pencil
                            width="25px" height="25px"
                        />
                    </button>
                    <button
                        onClick={()=>{
                        setDeletedWind(true)
                        }}
                    >
                        <LogoTrash
                            width="25px" height="25px"/>
                    </button>
                </div>


                <div className={cx('askDel', {
                    'askDel_visible': DeletedWind
                })}>
                    <div>
                        {(lang==='en')?Language.en.change_task_wind_deleted_title:Language.ru.change_task_wind_deleted_title}
                    </div>
                    <div className={cx('askDel_btn_area')}>
                        <button onClick={() => {
                            dispatch(defDelitTask(vall.id))
                            setDeletedWind(false)
                        }}>
                            {(lang==='en')?Language.en.change_task_wind_deleted_OK:Language.ru.change_task_wind_deleted_OK}
                        </button>
                        <button onClick={() => {
                            setDeletedWind(false)
                        }}>
                            {(lang==='en')?Language.en.change_task_wind_deleted_NO:Language.ru.change_task_wind_deleted_NO}
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

