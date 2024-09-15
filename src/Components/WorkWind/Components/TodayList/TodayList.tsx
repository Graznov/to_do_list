import styles from './list.module.css'
import classNames from "classnames/bind";
import {Mission} from "../Mission/Mission.tsx";
import {useAppSelector} from "../../../../Store/hooks.ts";
import {useEffect} from "react";
import {Task} from "../../../../Store/defSlice.ts";

const cx = classNames.bind(styles);

function TodayList() {
    const list = useAppSelector(state => state.defSlice.tasks)
    const listName = useAppSelector(state => state.styleSlice.listTasks)
    const ActyveTag = useAppSelector(state => state.styleSlice.styleTagActive)


    // const dispatch = useAppDispatch()
    let filtredArr = list.filter(item=>!item.isCompleted)

    function getDateRange(range:number):string {
        const currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+range).toISOString().split('');
        currentDate.splice(10)
        return currentDate.join('')
    }

    function daysMission(dat:string):Task[] {
        if(ActyveTag.length) filtredArr = filtredArr.filter(item=>ActyveTag.includes(item.category))
        return filtredArr.filter(item=>item.dueDate===dat)
    }

    useEffect(() => {

    }, [list]);

    const date:Date = new Date()
    const yourDate = date.toISOString().split('T')[0]

        if(listName==='All'){

            const afterDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1, 23,59,59)//вчерашний день, все что меньше - просрочено
            let AllfilterArr = list.filter(item => new Date(item.dueDate) > afterDay)
            if(ActyveTag.length) AllfilterArr = AllfilterArr.filter(item=>ActyveTag.includes(item.category))

            return (
                <div className={cx('cont')}>
                        {/*<h1>{listName}</h1>*/}

                    <div className={cx('content')}>
                        {
                            AllfilterArr.map((item) => (
                                <Mission
                                    id={item.id}
                                    tag={item.category}
                                    text={item.title}
                                    key={item.id}
                                    color={item.color}
                                    isCompleted={item.isCompleted}
                                />
                            ))
                        }
                    </div>
                </div>
            );

        } else if(listName==='Trash'){
            const afterDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1, 23,59,59)//вчерашний день, все что меньше - просрочено
            let filterCompletedArr = list.filter(item=>new Date(item.dueDate)<afterDay)
            if(ActyveTag.length) filterCompletedArr = filterCompletedArr.filter(item=>ActyveTag.includes(item.category))

            return (
                <div className={cx('cont')}>
                    {/*<h1>{listName}</h1>*/}
                    <div className={cx('content')}>
                        {
                            filterCompletedArr.map((item) => (
                                <Mission
                                    listName={listName}
                                    id={item.id}
                                    tag={item.category}
                                    text={item.title}
                                    key={item.id}
                                    color={item.color}
                                    isCompleted={item.isCompleted}
                                />
                            ))
                        }
                    </div>
                </div>
            );
        } else if(listName==='Completed'){

            let filterCompletedArr = list.filter(item=>item.isCompleted===true)
            if(ActyveTag.length) filterCompletedArr = filterCompletedArr.filter(item=>ActyveTag.includes(item.category))


            return (
                <div className={cx('cont')}>
                    {/*<h1>{listName}</h1>*/}
                    <div className={cx('content')}>
                        {
                            filterCompletedArr.map((item) => (
                                <Mission
                                    id={item.id}
                                    tag={item.category}
                                    text={item.title}
                                    key={item.id}
                                    color={item.color}
                                    isCompleted={item.isCompleted}

                                />
                            ))
                        }
                    </div>
                </div>
            );

        } else if(listName==='Today'){

            // const afterDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1, 23,59,59)//вчерашний день, все что меньше - просрочено

            const currentDatearr = new Date().toISOString().split('');
            currentDatearr.splice(10)
            const currentDate=currentDatearr.join('')

            // console.log(currentDate)

            const completedFilterArr = list.filter(item=>!item.isCompleted)
            let TodayfilterArr = completedFilterArr.filter(item=>item.dueDate===currentDate)
            if(ActyveTag.length) TodayfilterArr = TodayfilterArr.filter(item=>ActyveTag.includes(item.category))



            return (
                <div className={cx('cont')}>
                    <h1>
                        {/*<div>{listName}</div>*/}
                        <div className={cx('cont_date')}> {yourDate} </div>
                    </h1>
                    <div className={cx('content')}>
                        {
                            TodayfilterArr.map((item) => (
                                <Mission
                                    id={item.id}
                                    tag={item.category}
                                    text={item.title}
                                    key={item.id}
                                    color={item.color}
                                    isCompleted={item.isCompleted}
                                />
                            ))
                        }
                    </div>
                </div>
            );

        } else if(listName==='Next 7 days'){

            return (
                <>
                    {/*<h1>{listName}</h1>*/}

                    <div className={cx('cont', 'sevenDaysCont')}>

                            <div className={cx('sevenDaysContainerData')}>
                                <h1 className={cx('cont_date')}>{getDateRange(2)}</h1>
                                <div className={cx('content', 'sevenDaysContainer')}>

                                    {
                                        daysMission(getDateRange(2)).map((item) => (
                                            <Mission
                                                id={item.id}
                                                tag={item.category}
                                                text={item.title}
                                                key={item.id}
                                                color={item.color}
                                                isCompleted={item.isCompleted}
                                            />
                                        ))
                                    }

                                </div>
                            </div>

                            <div className={cx('sevenDaysContainerData')}>
                                <h1 className={cx('cont_date')}>{getDateRange(3)}</h1>
                                <div className={cx('content', 'sevenDaysContainer')}>
                                    {
                                        daysMission(getDateRange(3)).map((item) => (
                                            <Mission
                                                id={item.id}
                                                tag={item.category}
                                                text={item.title}
                                                key={item.id}
                                                color={item.color}
                                                isCompleted={item.isCompleted}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={cx('sevenDaysContainerData')}>
                                <h1 className={cx('cont_date')}>{getDateRange(4)}</h1>
                                <div className={cx('content', 'sevenDaysContainer')}>
                                    {
                                        daysMission(getDateRange(4)).map((item) => (
                                            <Mission
                                                id={item.id}
                                                tag={item.category}
                                                text={item.title}
                                                key={item.id}
                                                color={item.color}
                                                isCompleted={item.isCompleted}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={cx('sevenDaysContainerData')}>
                                <h1 className={cx('cont_date')}>{getDateRange(5)}</h1>
                                <div className={cx('content', 'sevenDaysContainer')}>
                                    {
                                        daysMission(getDateRange(5)).map((item) => (
                                            <Mission
                                                id={item.id}
                                                tag={item.category}
                                                text={item.title}
                                                key={item.id}
                                                color={item.color}
                                                isCompleted={item.isCompleted}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={cx('sevenDaysContainerData')}>
                                <h1 className={cx('cont_date')}>{getDateRange(6)}</h1>
                                <div className={cx('content', 'sevenDaysContainer')}>
                                    {
                                        daysMission(getDateRange(6)).map((item) => (
                                            <Mission
                                                id={item.id}
                                                tag={item.category}
                                                text={item.title}
                                                key={item.id}
                                                color={item.color}
                                                isCompleted={item.isCompleted}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={cx('sevenDaysContainerData')}>
                                <h1 className={cx('cont_date')}>{getDateRange(7)}</h1>
                                <div className={cx('content', 'sevenDaysContainer')}>
                                    {
                                        daysMission(getDateRange(7)).map((item) => (
                                            <Mission
                                                id={item.id}
                                                tag={item.category}
                                                text={item.title}
                                                key={item.id}
                                                color={item.color}
                                                isCompleted={item.isCompleted}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={cx('sevenDaysContainerData')}>
                                <h1 className={cx('cont_date')}>{getDateRange(8)}</h1>
                                <div className={cx('content', 'sevenDaysContainer')}>
                                    {
                                        daysMission(getDateRange(8)).map((item) => (
                                            <Mission
                                                id={item.id}
                                                tag={item.category}
                                                text={item.title}
                                                key={item.id}
                                                color={item.color}
                                                isCompleted={item.isCompleted}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                </>
            );


        }

    // }

}

export default TodayList;