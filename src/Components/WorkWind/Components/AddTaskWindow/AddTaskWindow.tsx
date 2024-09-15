import styles from './addTaskWindow.module.css'
import classNames from "classnames/bind";
import {useEffect, useState} from "react";
import {ReactComponent as CloseSvg} from "/src/assets/close-square-svgrepo-com.svg";
import {addTask} from "../../../../Store/defSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks.ts";
import {change_input_AddTaskWind, styleVisibleAddTask} from "../../../../Store/styleSlise.ts";


const cx = classNames.bind(styles);

export const AddTaskWindow = () => {


    const arrayTags: Array<string> = useAppSelector(state => state.styleSlice.tags)

    const errorInput = useAppSelector(state => state.styleSlice.input_AddTaskWind)

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(change_input_AddTaskWind('CANCEL'))
        }, 1300)
        return () => {
            clearTimeout(timer)
        }
    }, [errorInput]);


    const styleWindAddTask = useAppSelector(state => state.styleSlice.visibleAddTask)
    const dispatch = useAppDispatch()
    const [vall, setVall] = useState({
        id: '',
        title: '',
        description: '',
        dueDate: '',
        category: '',
        color: '',
        isCompleted: false
    })
    useEffect(() => {
        setVall({
            id: '',
            title: '',
            description: '',
            dueDate: '',
            category: '',
            color: '',
            isCompleted: false
        })
    }, [styleWindAddTask]);


    const ClassAddTask = cx('AddTaskContainer', {
        'AddTaskContainer_Visible': styleWindAddTask,
    })


    useEffect(() => {
    }, [vall.color]);

    document.addEventListener('keydown', function(event) {
        if (event.code == 'Escape') {
            if(styleWindAddTask) dispatch(styleVisibleAddTask(false))
        }
    });

    const closeWindowAddTask = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault()
        dispatch(styleVisibleAddTask(false))
        setVall(vall)
    }

    const color = (e: { target: { textContent: string; }; }) => {
        setVall({
            ...vall,
            color: e.target.textContent
        })
    }

    const addTagFromTagsBtn = (e: { target: { innerHTML: string; }; }) => {
        setVall({
            ...vall,
            category: e.target.innerHTML
        })
    }


    // let yourDate = new Date()
    const yourDate = new Date().toISOString().split('T')[0]

    return (
        <form className={ClassAddTask}>

            <button
                onClick={closeWindowAddTask}
                // type='button'
                className={cx('close')}>
                <CloseSvg/>
            </button>

            <div className={cx('AddTaskContainerTop')}>
                <input
                    className={cx('addTaskContainerTopInput', {
                        'addTaskContainerTopInput_RED': !errorInput.inputTitle
                    })}
                    type='text'
                    value={vall.title}
                    placeholder='Add title'
                    onChange={(e) => {
                        setVall({
                            ...vall,
                            title: e.target.value
                        })
                    }}
                />
                <input
                    className={cx('addTaskContainerTopInput', {
                        'addTaskContainerTopInput_RED': !errorInput.inputTag
                    })}
                    type='text'
                    placeholder='Add Tag'
                    value={vall.category}
                    onChange={(e) => {
                        setVall({
                            ...vall,
                            category: e.target.value
                        })
                    }}
                />

                {/*<div>*/}
                {/*    сделать выбор тега*/}

                <div className={cx("dropdown")}>
                    <button type='button' className={cx("dropbtn")}>Tags:</button>
                    <div className={cx("dropdown-content")}>
                        {
                            arrayTags.map(tag =>
                                <button onClick={addTagFromTagsBtn} type='button' key={tag}>{tag}</button>
                            )
                        }
                    </div>
                </div>

                {/*</div>*/}

                <div
                    className={cx('AddTaskContainerTop_colrs')}>
                    <p>Add color:</p>
                    <div className={cx('AddTaskContainerTop_colrs_btnArea')}>
                        <button onClick={color} type='button' className={cx('AddTaskContainerTop_colrs_btn', 'red', {
                            colorActive: vall.color === 'red'
                        })}>red
                        </button>
                        <button onClick={color} type='button' className={cx('AddTaskContainerTop_colrs_btn', 'green', {
                            colorActive: vall.color === 'green'
                        })}>green
                        </button>
                        <button onClick={color} type='button' className={cx('AddTaskContainerTop_colrs_btn', 'blue', {
                            colorActive: vall.color === 'blue'
                        })}>blue
                        </button>
                        <button onClick={color} type='button' className={cx('AddTaskContainerTop_colrs_btn', 'yellow', {
                            colorActive: vall.color === 'yellow'
                        })}>yellow
                        </button>
                        <button onClick={color} type='button' className={cx('AddTaskContainerTop_colrs_btn', 'purple', {
                            colorActive: vall.color === 'purple'
                        })}>purple
                        </button>
                    </div>

                </div>
                <div className={cx('AddTaskContainerTop_dateTimecontainer')}>
                    <input
                        className={cx('addTaskContainerTopInput', 'addTaskContainerTopInput_Date', {
                            'addTaskContainerTopInput_RED': !errorInput.inputDate
                        })}
                        // type="datetime-local"
                        type='date'
                        min={yourDate}
                        value={vall.dueDate}
                        onChange={(e) => {
                            // const date = Date.now()
                            // console.log(date)
                            // const res = Date(e.target.value)
                            // console.log(res)
                            // console.log(e.target.value)
                            setVall({
                                ...vall,
                                dueDate: e.target.value
                            })
                        }}
                    />

                </div>

            </div>

            <textarea
                placeholder='Text'
                rows={4}
                value={vall.description}
                onChange={(e) => {
                    setVall({
                        ...vall,
                        description: e.target.value
                    })
                }}/>
            <button
                // type='button'
                onClick={(evt) => {
                    evt.preventDefault()
                    console.log('evt.preventDefault()')
                    if (vall.title && vall.category && vall.dueDate) {
                        dispatch(styleVisibleAddTask(false))
                        // if(!arrayTags.includes(vall.category)){
                        //     dispatch(plusTag(vall.category))
                        // }

                        dispatch(
                            addTask({
                                    id: `${vall.title} ${Math.floor(Math.random() * 1000)}`,
                                    title: vall.title,
                                    description: vall.description,
                                    dueDate: vall.dueDate,
                                    category: vall.category,
                                    color: vall.color,
                                    isCompleted: false
                                }
                            ))
                    } else {
                        console.log('add Title, Tag, Date')
                        if (!vall.title) {
                            dispatch(change_input_AddTaskWind('NO TITLE'))
                        }
                        if (!vall.category) {
                            dispatch(change_input_AddTaskWind('NO TAG'))
                        }
                        if (!vall.dueDate) {
                            dispatch(change_input_AddTaskWind('NO DATA'))
                        }


                    }

                }} className={cx('AddTaskContainerBtn')}>Add
            </button>

        </form>
    );
};