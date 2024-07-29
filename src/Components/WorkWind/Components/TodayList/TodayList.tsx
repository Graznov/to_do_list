import styles from './list.module.css'
import classNames from "classnames/bind";
import {Mission} from "../Mission/Mission.tsx";

const cx = classNames.bind(styles);

const arr = [
    {
        id:1,
        tag:'Personal',
        text:'Lorem ipsum dolor вставки или слова, которые даже отдалённо не напоминают латынь'
    },
    {
        id:2,
        tag:'Personal',
        text:'Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
    },
    {
        id:3,
        tag:'Work',
        text:'Многие думают, что'
    },
    {
        id:4,
        tag:'Game',
        text:'большинство из них имеет'
    },
    {
        id:5,
        tag:'Game',
        text:'Есть много вариантов'
    },
]

function TodayList() {
    return (
        <div className={cx('cont')}>
            <h1>Today</h1>


            {
                arr.map((item) => (
                    <Mission
                        tag={item.tag}
                        text={item.text}
                        key={item.id}/>
                ))
            }


        </div>
    );
}

export default TodayList;