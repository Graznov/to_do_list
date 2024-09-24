import classNames from "classnames/bind";
import styles from "./userName.module.css";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks.ts";
import {setLang, setTheme} from "../../../../Store/styleSlise.ts";
import {Language} from "../../../../Store/language.ts";

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
    const lang = useAppSelector(state => state.styleSlice.language)

    useEffect(()=>{
        dispatch(setLang(localStorage.getItem('lang')));
        (lang==='ru')?setPathImgLang(ru):setPathImgLang(us)
    },[dispatch, lang])

    const [pathImgLang, setPathImgLang] = useState(us)
    const [pathImgTheme, setPathImgTheme] = useState(light);
    const [visibleMenu, setVisibleMenu] = useState(false);
    const changeTheme = () => {
        (pathImgTheme===light)?setPathImgTheme(dark):setPathImgTheme(light);
        dispatch(setTheme())
        localStorage.setItem('theme', String(true))
    }
    const changeLanguage = () => {
        if(pathImgLang===us){
            setPathImgLang(ru)
            dispatch(setLang('ru'))
            localStorage.setItem('lang', 'ru')
        } else if(pathImgLang===ru){
            setPathImgLang(us)
            dispatch(setLang('en'))
            localStorage.setItem('lang', 'en')
        }
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
                        <span>{(lang==='en')?Language.en.work_left_theme:Language.ru.work_left_theme}</span>
                        {/*<span>{Language.[lang].work_left_theme}</span>*/}
                        <img src={pathImgTheme} alt=""/>
                    </button>
                </li>
                <li>

                    <button
                        className={cx('btn_menu')}
                        onClick={changeLanguage}>
                        <span>{(lang==='en')?Language.en.work_left_lang:Language.ru.work_left_lang}</span>
                        <img className={cx({'us': pathImgLang === us})} src={pathImgLang} alt=""/>
                    </button>
                </li>
                <li><a
                    href="#"
                    onClick={() => {
                    setVisibleMenu(!visibleMenu)
                }}>{(lang==='en')?Language.en.work_left_exit:Language.ru.work_left_exit}</a></li>
            </ul>
        </div>


    );
}

export default UserName;