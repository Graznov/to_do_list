import classNames from "classnames/bind";
import styles from "./userName.module.css";
import {useState} from "react";
import {useAppDispatch} from "../../../../Store/hooks.ts";
import {setLang, setTheme} from "../../../../Store/styleSlise.ts";

const cx = classNames.bind(styles);
interface propsUserNames{
    pathAvaImg:string,
    userName:string
}

const light:string = '/src/assets/day-theme.svg'
const dark:string = '/src/assets/night-theme.svg'
const us:string = '/src/assets/flag-us-svgrepo-com.svg'
const ru:string = '/src/assets/flag-ru-svgrepo-com.svg'



function UserName({pathAvaImg, userName}:propsUserNames) {
    const dispatch = useAppDispatch()
    // const theme = useAppSelector(state => state.styleSlice.darkTheme)
    // const lang = useAppSelector(state => state.styleSlice.language)

    const [pathImgLang, setPathImgLang] = useState(us)
    const [pathImgTheme, setPathImgTheme] = useState(light);
    const [visibleMenu, setVisibleMenu] = useState(false);
    const changeTheme = () => {
        (pathImgTheme===light)?setPathImgTheme(dark):setPathImgTheme(light);
        dispatch(setTheme())
    }
    const changeLanguage = () => {
        (pathImgLang===us)?setPathImgLang(ru):setPathImgLang(us);
        (pathImgLang===us)?dispatch(setLang('ru')):dispatch(setLang('us'))
    }

    document.addEventListener('mouseup', (e) => {
        const container = document.getElementById('mainID');
        if (!container.contains(e.target)) {
            setVisibleMenu(false)
        }
    });
    
    return (


        <div
            className={cx('work_container_leftPanel_user')}
            id='mainID'>
            <button
                className={cx('btn_user')}
                onClick={() => setVisibleMenu(!visibleMenu)}
                >
                <img
                    src={pathAvaImg}
                    alt="user ava"
                />
                <h3>{userName}</h3>
            </button>

            <ul className={cx('menu',{
                'visibleMenu': visibleMenu
            })}>
                <li>

                    <button
                        className={cx('btn_menu')}
                        onClick={changeTheme}>
                        <span>Theme</span>
                        <img src={pathImgTheme} alt=""/>
                    </button>
                </li>
                <li>

                    <button
                        className={cx('btn_menu')}
                        onClick={changeLanguage}>
                        <span>Lang</span>
                        <img className={cx({'us': pathImgLang === us})} src={pathImgLang} alt=""/>
                    </button>
                </li>
                <li><a
                    href="#"
                    onClick={() => {
                    setVisibleMenu(!visibleMenu)
                }}>Exit</a></li>
            </ul>
        </div>


    );
}

export default UserName;