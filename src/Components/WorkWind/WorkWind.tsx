import styles from './workWind.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function WorkWind() {



    return (
        <div className={cx('work_container')}>

            <div className={cx('work_container_leftPanel')}>

                <div className={cx('work_container_leftPanel_user')}>
                    <img
                        src="./public/user_avatar.jpeg"
                        alt="user ava"
                    />
                    <h3>User01</h3>
                </div>


            </div>

            <div className={cx('work_container_rightPanel')}>

            </div>

        </div>
    );
}

export default WorkWind;
