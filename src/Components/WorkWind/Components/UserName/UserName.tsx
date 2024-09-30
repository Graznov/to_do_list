import classNames from "classnames/bind";
import styles from "./userName.module.css";
import {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../Store/hooks.ts";
import {setLang, setTheme} from "../../../../Store/styleSlise.ts";
import {NavLink} from "react-router-dom";
import {eng} from "../../../../Store/En.ts";
import {russ} from "../../../../Store/Ru.ts";

const cx = classNames.bind(styles);
interface propsUserNames{
    pathAvaImg:string,
    userName:string
}

const lightThemePath:string = '/src/assets/day-theme.svg'
const darkThemePath:string = '/src/assets/night-theme.svg'
const us:string = '/src/assets/flag-us-svgrepo-com.svg'
const ru:string = '/src/assets/flag-ru-svgrepo-com.svg'

function UserName({pathAvaImg, userName}:propsUserNames) {
    const dispatch = useAppDispatch()
    const lang = useAppSelector(state => state.styleSlice.language)
    const darkTheme = useAppSelector(state => state.styleSlice.darkTheme)

    console.log(darkTheme)

    useEffect(()=>{
        if(!localStorage.getItem('lang')){
            localStorage.setItem('lang', lang)
        }
        dispatch(setLang(localStorage.getItem('lang')));
        (lang==='ru')?setPathImgLang(ru):setPathImgLang(us)

        if(!localStorage.getItem('darkTheme')){
            localStorage.setItem('darkTheme',  String(darkTheme))
        } else {
        //     dispatch(setTheme(localStorage.getItem('darkTheme')));
            // (!darkTheme)?setPathImgTheme(darkThemePath):setPathImgTheme(lightThemePath)
        }
        // (!darkTheme)?setPathImgTheme(darkThemePath):setPathImgTheme(lightThemePath)
        console.log(`localStorage.getItem('darkTheme'): ${localStorage.getItem('darkTheme')}`)

    })

// localStorage.clear()

    const [pathImgLang, setPathImgLang] = useState(us)
    const [pathImgTheme, setPathImgTheme] = useState(lightThemePath);
    const [visibleMenu, setVisibleMenu] = useState(false);

    console.log(`darkTheme: ${darkTheme},\npathImgTheme: ${pathImgTheme}`)

    const changeTheme = () => {

        if(pathImgTheme===lightThemePath) {
            setPathImgTheme(darkThemePath)
            dispatch(setTheme(true))
            localStorage.setItem('darkTheme', String(true))
        } else if(pathImgTheme===darkThemePath) {
            setPathImgTheme(lightThemePath);
            dispatch(setTheme(false))
            localStorage.setItem('darkTheme', String(false))
        }

        // console.log('changeTheme');
    }

    const changeLanguage = () => {
        if(pathImgLang===us){
            setPathImgLang(ru)
            dispatch(setLang('ru'))
            console.log(lang)
            localStorage.setItem('lang', 'ru')
        } else if(pathImgLang===ru){
            setPathImgLang(us)
            dispatch(setLang('en'))
            console.log(lang)
            localStorage.setItem('lang', 'en')
        }
    }

    const menuRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                // console.log('Клик вне компонента');
                setVisibleMenu(false)
                // Логика закрытия или другого действия
            }
        }

        // Добавляем обработчик событий при монтировании компонента
        document.addEventListener('mousedown', handleClickOutside);

        // Убираем обработчик событий при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const langMap = lang === 'ru' ? russ:eng
    
    return (


        <div
            ref={menuRef}
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
                        <span>
                            {/*{(lang==='en')?en.work_left_theme:ru.work_left_theme}*/}
                            {langMap.work_left_theme}
                        </span>
                        {/*<span>{Language.[lang].work_left_theme}</span>*/}
                        <img src={pathImgTheme} alt=""/>
                    </button>
                </li>
                <li>

                    <button
                        className={cx('btn_menu')}
                        onClick={changeLanguage}>
                        <span>{langMap.work_left_lang}</span>
                        <img className={cx({'us': pathImgLang === us})} src={pathImgLang} alt=""/>
                    </button>
                </li>
                <li>
                    <NavLink
                        to={'/'}
                            onClick={() => {
                                setVisibleMenu(!visibleMenu)
                            }
                        }>
                        {langMap.work_left_exit}
                    </NavLink>
                </li>
            </ul>
        </div>


    );
}

export default UserName;