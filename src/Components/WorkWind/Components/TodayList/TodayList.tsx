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
    const styleSearchStatus = useAppSelector(state => state.styleSlice.styleSearchStatus)
    const styleSearchList = useAppSelector(state => state.styleSlice.styleSearchList)


    let filtredArr = list.filter(item=>!item.isCompleted)
    const options = {
        // era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
    };
    function getDateRange(range:number):string {
        const currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+range).toISOString().split('');
        currentDate.splice(10)
        // console.log(new Date(currentDate.join('')).toLocaleString('en', options))
        return currentDate.join('')
    }

    function daysMission(dat:string):Task[] {
        if(ActyveTag.length) filtredArr = filtredArr.filter(item=>ActyveTag.includes(item.category))
        return filtredArr.filter(item=>item.dueDate.split('T')[0]===dat)
    }

    useEffect(() => {

    }, [list, styleSearchList]);

    const date:Date = new Date()
    const yourDate = date.toISOString().split('T')[0]

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

            let filterCompletedArr = list.filter(item=>item.isCompleted===true)
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

            // const afterDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1, 23,59,59)//вчерашний день, все что меньше - просрочено

            const currentDatearr = new Date().toISOString().split('');
            currentDatearr.splice(10)
            const currentDate=currentDatearr.join('')

            // console.log(currentDate)

            const completedFilterArr = list.filter(item=>!item.isCompleted)
            // let TodayfilterArr = completedFilterArr.filter(item=>item.dueDate===currentDate)
            let TodayfilterArr = completedFilterArr.filter(item=>item.dueDate.split('T')[0]===currentDate)
            if(ActyveTag.length) TodayfilterArr = TodayfilterArr.filter(item=>ActyveTag.includes(item.category))

            return (
                <div className={cx('cont')}>
                    <h1>
                        <div className={cx('adaptiveNameList')}>{listName}</div>
                        <div className={cx('cont_date')}> {new Date(new Date().toISOString()).toLocaleString('en', options)} </div>
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
                            <h1 className={cx('cont_date')}>{new Date(getDateRange(2)).toLocaleString('en', options)}</h1>
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
                            <h1 className={cx('cont_date')}>{new Date(getDateRange(3)).toLocaleString('en', options)}</h1>
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
                            <h1 className={cx('cont_date')}>{new Date(getDateRange(4)).toLocaleString('en', options)}</h1>
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
                            <h1 className={cx('cont_date')}>{new Date(getDateRange(5)).toLocaleString('en', options)}</h1>
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
                            <h1 className={cx('cont_date')}>{new Date(getDateRange(6)).toLocaleString('en', options)}</h1>
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
                            <h1 className={cx('cont_date')}>{new Date(getDateRange(7)).toLocaleString('en', options)}</h1>
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
                            <h1 className={cx('cont_date')}>{new Date(getDateRange(8)).toLocaleString('en', options)}</h1>
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