import styles from './addTaskWindow.module.css'
import classNames from "classnames/bind";
import {useEffect, useState} from "react";

type Props = {
    visibleAddTask:boolean
};
const cx = classNames.bind(styles);

export const AddTaskWindow = (Props:Props) => {

    const ClassAddTask = cx('AddTaskContainer',{
        'AddTaskContainer_Visible':Props.visibleAddTask
    })

    const [vall, setVall] = useState({
        tag:'',
        date:'',
        text:''
    })

    useEffect(() => {
        console.log(vall)
    }, [vall]);

    return (
        <form className={ClassAddTask}>

            <div className={cx('AddTaskContainerTop')}>
                <input
                    type='text'
                    placeholder='Add Task'
                    onChange={(e)=>{
                        setVall({
                            ...vall,
                            tag: e.target.value
                        })
                    }}
                />
                <input
                    type="date"
                    onChange={(e)=>{
                        setVall({
                            ...vall,
                            date: e.target.value
                        })
                    }}
                />
            </div>

            <textarea
                placeholder='Text'
                rows='4'
                onChange={(e)=>{
                    setVall({
                        ...vall,
                        text: e.target.value
                    })
                }}/>
            <button className={cx('AddTaskContainerBtn')}>Add</button>

        </form>
    );
};