import styles from './mission.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Mission({tag, text, id}) {
    return (
        <div className={cx('mission')}>
            <input
                className={cx('missCheck')}
                onChange={()=>console.log(`CHEKED ${tag}`)}
                type="checkbox"
                />
            <div className={cx('missTag')}>{tag}</div>
            <div className={cx('missText')}>{text}</div>
        </div>
    );
};