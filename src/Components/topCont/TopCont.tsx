import styles from "./topCont.module.css";
import classNames from "classnames/bind";
import {useAppSelector} from "../../Store/hooks.ts";

const cx = classNames.bind(styles);

function TopCont(){
    const theme = useAppSelector(state => state.styleSlice.theme)

    return(
        <div className={cx('top_cont',{
            'top_cont_dark':theme === 'dark'
        })}>
            <img className={styles.image}
                src=".\public\checklist-minimalistic-svgrepo-com.svg"
                alt="logo"
            />
            <h1>Focus flow</h1>
        </div>
    )
}

export default TopCont
