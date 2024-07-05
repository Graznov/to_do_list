import classNames from "classnames/bind";
import styles from "./userName.module.css";

const cx = classNames.bind(styles);


function UserName({pathAvaImg, userName}) {
    return (
        <div className={cx('work_container_leftPanel_user')}>
            <img
                src={pathAvaImg}
                alt="user ava"
            />
            <h3>{userName}</h3>
        </div>
    );
}

export default UserName;