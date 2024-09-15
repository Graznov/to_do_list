import styles from './changeForm.module.css'
import classNames from "classnames/bind";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks.ts";
import {
    // changeVisibleChangeForm,
    // setChangedTask,
    setStyleDeletedWind,
} from "../../../../Store/styleSlise.ts";
import {ReactComponent as CloseSvg} from "/src/assets/close-square-svgrepo-com.svg";
import {ReactComponent as LogoTrash} from "/src/assets/trash.svg";
import {defChangeTask, defDelitTask} from "../../../../Store/defSlice.ts";
import {useEffect, useState} from "react";

const cx = classNames.bind(styles);

function ChangeForm() {
    const visibleChangeForm = useAppSelector(state => state.styleSlice.visibleChangeForm)
    const styleDeletedWind = useAppSelector(state => state.styleSlice.styleDeletedWind)
    const dispatch = useAppDispatch()

    const changedTask = useAppSelector(state => state.styleSlice.changedTask)

    const yourDate = new Date().toISOString().split('T')[0]

    const [vall, setVall] = useState({
        category:"___",
        color:"___",
        description:"___",
        dueDate:"0000-00-00",
        id:"___.",
        isCompleted:false,
        title:"___"
    })

    useEffect(() => {
        setVall(changedTask)
    }, [visibleChangeForm]);

    function color (e: { target: { textContent: string; }; }) {
        setVall({
            ...vall,
            color: e.target.textContent
        })
    }

    // document.addEventListener('keydown', function(event) {
    //     if (event.code == 'Escape') {
    //         if(styleDeletedWind){
    //             dispatch(setStyleDeletedWind(false))
    //         }
    //
    //     }
    // });

        return (

            <>

                <div className={cx('change-form', {
                    'change-form_VISIBLE': visibleChangeForm
                })}>
                    <button
                        className={cx('closeBtn')}
                        onClick={() => {
                            dispatch(changeVisibleChangeForm(false))
                            dispatch(setChangedTask({
                                category:"___",
                                color:"___",
                                description:"___",
                                dueDate:"0000-00-00",
                                id:"___.",
                                isCompleted:false,
                                title:"___"
                            }))
                        }}>
                        <CloseSvg/>
                    </button>

                    <div className={cx('input-area')}>

                        <div className={cx('input-area_content')}>
                            <p>Title:</p>
                            <input
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
                            <div className={cx('AddTaskContainerTop_colrs_btnArea')}>
                                <button onClick={color} type='button'
                                        className={cx('AddTaskContainerTop_colrs_btn', 'red', {
                                            colorActive: vall.color === 'red'
                                        })}>red
                                </button>
                                <button onClick={color} type='button'
                                        className={cx('AddTaskContainerTop_colrs_btn', 'green', {
                                            colorActive: vall.color === 'green'
                                        })}>green
                                </button>
                                <button onClick={color} type='button'
                                        className={cx('AddTaskContainerTop_colrs_btn', 'blue', {
                                            colorActive: vall.color === 'blue'
                                        })}>blue
                                </button>
                                <button onClick={color} type='button'
                                        className={cx('AddTaskContainerTop_colrs_btn', 'yellow', {
                                            colorActive: vall.color === 'yellow'
                                        })}>yellow
                                </button>
                                <button onClick={color} type='button'
                                        className={cx('AddTaskContainerTop_colrs_btn', 'purple', {
                                            colorActive: vall.color === 'purple'
                                        })}>purple
                                </button>
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

                    </div>

                    <div className={cx('btn-area')}>

                        <button
                            className={cx('Btn')}
                            onClick={() => {
                                dispatch(changeVisibleChangeForm(false))
                                dispatch(defChangeTask(vall))
                                dispatch(setChangedTask({
                                    category: "___",
                                    color: "___",
                                    description: "___",
                                    dueDate: "___",
                                    id: "___.",
                                    isCompleted: false,
                                    title: "___"
                                }))
                            }}>
                            Make a change
                        </button>
                        <button
                            className={cx('Btn')}
                            onClick={() => {
                                dispatch(setStyleDeletedWind(true))
                                styleDeletedWind
                            }}>
                            <LogoTrash/>
                        </button>

                    </div>

                </div>

                
                <div className={cx('askDel', {
                    'askDel_visible':styleDeletedWind
                })}>
                    <div>Delete task?</div>
                    <div className={cx('askDel_btn_area')}>
                        <button onClick={()=>{

                            dispatch(defDelitTask(changedTask.id))
                            dispatch(changeVisibleChangeForm(false))
                            dispatch(setStyleDeletedWind(false))
                        }}>Delete</button>
                        <button onClick={()=>{
                            dispatch(setStyleDeletedWind(false))
                        }}>Cancel</button>
                    </div>
                </div>
                
            </>
        );

}

export default ChangeForm;