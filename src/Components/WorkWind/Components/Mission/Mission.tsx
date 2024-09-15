import styles from './mission.module.css'
import classNames from "classnames/bind";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks.ts";
import {checkTask, defChangeTask, defDelitTask, Task} from "../../../../Store/defSlice.ts";
import {useState} from "react";
import {ReactComponent as LogoTrash} from "/src/assets/trash.svg";
import {ReactComponent as Pencil} from "/public/pencil.svg";
import {styleVisibleAddTask} from "../../../../Store/styleSlise.ts";


const cx = classNames.bind(styles);

type id = { id: string; }

interface MissionProps {
    tag:string,
    text:string,
    color:string,
    listName?:string,
    id:string,
    isCompleted:boolean
}



export function Mission({tag, text, color, listName, id, isCompleted}:MissionProps) {

    const list = useAppSelector(state => state.defSlice.tasks)
    // const styleWindAddTask = useAppSelector(state => state.styleSlice.visibleAddTask)

    // const changedTask = useAppSelector(state => state.styleSlice.changedTask)
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
    // console.log(vall)

    const serColor = (e: { target: { textContent: string; }; }) => {
        setVall({
            ...vall,
            color: e.target.textContent
        })
    }

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
                        list.forEach((element: id) => {
                            if (element.id === id) miss = element
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
                    <p>Title:</p>
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
                    <p>Tag:</p>
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
                    <p>Date:</p>
                    <input
                        className={cx({
                            'input-Disabled':disabled
                        })}
                        disabled={disabled}
                        value={vall.dueDate}
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
                    <p>Color:</p>
                    <div

                        className={cx('AddTaskContainerTop_colrs_btnArea')}>
                        <button                         disabled={disabled}
                                                        onClick={serColor} type='button' className={cx('AddTaskContainerTop_colrs_btn', 'red', {
                            colorActive: vall.color === 'red'
                        })}>red
                        </button>
                        <button                         disabled={disabled}
                                                        onClick={serColor} type='button'
                                className={cx('AddTaskContainerTop_colrs_btn', 'green', {
                                    colorActive: vall.color === 'green'
                                })}>green
                        </button>
                        <button                         disabled={disabled}
                                                        onClick={serColor} type='button'
                                className={cx('AddTaskContainerTop_colrs_btn', 'blue', {
                                    colorActive: vall.color === 'blue'
                                })}>blue
                        </button>
                        <button                         disabled={disabled}
                                                        onClick={serColor} type='button'
                                className={cx('AddTaskContainerTop_colrs_btn', 'yellow', {
                                    colorActive: vall.color === 'yellow'
                                })}>yellow
                        </button>
                        <button                         disabled={disabled}
                                                        onClick={serColor} type='button'
                                className={cx('AddTaskContainerTop_colrs_btn', 'purple', {
                                    colorActive: vall.color === 'purple'
                                })}>purple
                        </button>
                    </div>
                </div>
                Description:
                <textarea
                    disabled={disabled}
                    placeholder='Text'
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
                    <div>Delete task?</div>
                    <div className={cx('askDel_btn_area')}>
                        <button onClick={() => {
                            dispatch(defDelitTask(vall.id))
                            setDeletedWind(false)
                        }}>Delete
                        </button>
                        <button onClick={() => {
                            setDeletedWind(false)
                        }}>Cancel
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

