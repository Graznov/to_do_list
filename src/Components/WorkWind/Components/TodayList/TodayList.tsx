import styles from './list.module.css'
import classNames from "classnames/bind";
import {Mission} from "../Mission/Mission.tsx";
import {useAppSelector} from "../../../../Store/hooks.ts";
import {useEffect} from "react";
import {Task} from "../../../../Store/defSlice.ts";

const cx = classNames.bind(styles);

function getDateRange(range:number):string {
    const currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+range).toISOString().split('');
    currentDate.splice(10)
    return currentDate.join('')
}

function createDate(n:number):string{
    return new Date(new Date(getDateRange(n)).toISOString()).toLocaleString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        // timezone: 'UTC',
    })
}

function TodayList() {
    const list = useAppSelector(state => state.defSlice.tasks)
    const listName = useAppSelector(state => state.styleSlice.listTasks)
    const ActyveTag = useAppSelector(state => state.styleSlice.styleTagActive)
    const styleSearchStatus = useAppSelector(state => state.styleSlice.styleSearchStatus)
    const styleSearchList = useAppSelector(state => state.styleSlice.styleSearchList)

    let filtredArr = list.filter(item=>!item.isCompleted)

    function daysMission(dat:string):Task[] {
        if(ActyveTag.length) filtredArr = filtredArr.filter(item=>ActyveTag.includes(item.category))
        return filtredArr.filter(item=>item.dueDate.split('T')[0]===dat)
    }

    useEffect(() => {
    }, [list, styleSearchList]);

    if(styleSearchStatus){

        return (
            <div className={cx('cont')}>
                <h1>{'Search'}</h1>
                <div className={cx('content')}>
                    {
                        styleSearchList.map((item) => (
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

    }

        if(listName==='All'){

            const afterDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1, 23,59,59)//вчерашний день, все что меньше - просрочено
            let AllfilterArr = list.filter(item => new Date(item.dueDate) > afterDay)
            if(ActyveTag.length) AllfilterArr = AllfilterArr.filter(item=>ActyveTag.includes(item.category))

            return (
                <div className={cx('cont')}>
                    <h1 className={cx('adaptiveNameList')}>{listName}</h1>

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
                    <h1 className={cx('adaptiveNameList')}>{listName}</h1>
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

            let filterCompletedArr = list.filter(item=>item.isCompleted)
            if(ActyveTag.length) filterCompletedArr = filterCompletedArr.filter(item=>ActyveTag.includes(item.category))


            return (
                <div className={cx('cont')}>
                    <h1 className={cx('adaptiveNameList')}>{listName}</h1>
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

            const currentDatearr = new Date().toISOString().split('');
            currentDatearr.splice(10)
            const currentDate=currentDatearr.join('')

            const completedFilterArr = list.filter(item=>!item.isCompleted)
            let TodayfilterArr = completedFilterArr.filter(item=>item.dueDate.split('T')[0]===currentDate)
            if(ActyveTag.length) TodayfilterArr = TodayfilterArr.filter(item=>ActyveTag.includes(item.category))

            return (
                <div className={cx('cont')}>
                    <h1>
                        <div className={cx('adaptiveNameList')}>{listName}</div>
                        <div className={cx('cont_date')}> {createDate(1)} </div>
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
                    <div className={cx('cont', 'sevenDaysCont')}>
                        <h1 className={cx('adaptiveNameList')}>{listName}</h1>
                        <div className={cx('sevenDaysContainerData')}>
                            <h1 className={cx('cont_date')}>{createDate(2)}</h1>
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
                            <h1 className={cx('cont_date')}>{createDate(3)}</h1>
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
                            <h1 className={cx('cont_date')}>{createDate(4)}</h1>
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
                            <h1 className={cx('cont_date')}>{createDate(5)}</h1>
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
                            <h1 className={cx('cont_date')}>{createDate(6)}</h1>
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
                            <h1 className={cx('cont_date')}>{createDate(7)}</h1>
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
                            <h1 className={cx('cont_date')}>{createDate(8)}</h1>
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

}

export default TodayList;