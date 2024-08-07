import styles from "./logInWind.module.css";
import {Input} from "../ui-kit/Input.tsx";
import Btn from "../ui-kit/Btn.tsx";
import {useEffect, useState} from "react";
import classNames from "classnames/bind";
import {NavLink} from "react-router-dom";
import Title_3 from "../ui-kit/title_3.tsx";

const cx = classNames.bind(styles);


export const LogInWind = () => {

    const [formLogin, setFormLogin] = useState({
        email:'',
        password:'',
    })

    const ClassBtn = cx('classNameBtn',{
        classNameBtnDiss:(!formLogin.email || !formLogin.password)
    })
    const [upper, setUpper] = useState(false) //для загл буквы пароля
    const [numberInPass, setNumberInPass] = useState(false)


    const [emailDirty, setEmailDirty] = useState(false)
    const [emailBorder, setEmailBorder] = useState(false)
    const [emailError, setEmailError] = useState('Поле не может быть пустым')

    const [passOneDirty, setPassOneDirty] = useState(false)
    const [passOneError, setPassOneError] = useState('Поле не может быть пустым')

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                if(!formLogin.email){
                    setEmailDirty(true)
                    setEmailBorder(true)
                }
                break
            case 'passOne':
                if (passOne.length<6 || passOne.length>250){
                    setPassOneDirty(true)
                    setPassOneError('не менее 6 и не более 250 символов')
                    break
                } else if(!numberInPass && !upper){
                    // console.log(`passOne: ${passOne} is good`)
                    setPassOneDirty(true)
                    setPassOneError('должна быть заглавная буква и цифра')
                } else if(passOne.length>6 && numberInPass && upper){
                    setPassOneDirty(false)
                    setPassOneError('')
                    setFormLogin({
                        ...formLogin,
                        password: passOne
                    })
                    break

                }
                break
        }
    }

    const ClassInputEmail = cx('classNameInputEmail',{
        classNameInput_red:emailDirty && emailBorder
    });
    const ClassLabelEmail = cx('classNameLabelEmail',{
        classNameLabel_red:emailDirty && emailBorder
    });
    const ClassInputPass = cx('classNameInputPass',{
        classNameInput_red:passOneDirty
    });
    const ClassLabelPass = cx('classNameLabelPass',{
        classNameLabel_red:passOneDirty
    });


// проверка почты...
    const changeEmail = (e) => {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        function isEmailValid (value){
            return EMAIL_REGEXP.test(value);
        }
        if(isEmailValid(e.target.value)){
            setFormLogin({
                ...formLogin,
                email: e.target.value
            })
            setEmailDirty(!emailDirty)
            setEmailBorder(false)
            setEmailError('')
        } else {
            setEmailError('Некорректный емейл')
            setEmailBorder(true)
        }
    }
// ...проверка почты

// проверка пароля...

    const [passOne,  setPassOne] = useState('')

    const changePassOne = (e) => {
        const elem = e.target.value
        setPassOne(elem)
    }
    useEffect(()=>{
        passOne.split('').forEach(i =>{
            if (!isNaN(i)){
                setNumberInPass(true)
            }else if(isNaN(i) && i===i.toUpperCase()) {
                setUpper(true)
            }

        }, [passOne])
    })

// ...проверка пароля


// кнопка показать/скрыть пароль:
    const [adress, setAdress] = useState('public/hide_icon.svg')
    const [isShown, setIsShown] = useState(false)
    const isShowChange = () => {
        setIsShown(!isShown)
        setAdress((adress==='public/hide_icon.svg')?'public/show_icon.svg':'public/hide_icon.svg')
    }

// ... показать/скрыть пароль

    return(
            <form className={styles.input_area}>

                <Input
                    name='email'
                    onBlur={e => blurHandler(e)}
                    onChange={changeEmail}
                    classNameContainer={styles.classNameContainer}
                    classNameLabel={ClassLabelEmail}
                    classNameInput={ClassInputEmail}
                    placeholder=''
                    type='email'
                    hidden='Email'
                    ClassDivError={cx('ClassDivError',{
                        ClassDivErrorVisibl:emailDirty
                    })}
                    message={emailError}
                    classNameBtn={styles.classInputBtn}

                />
                <Input
                    name='passOne'
                    onBlur={e => blurHandler(e)}
                    onChange={changePassOne}
                    classNameContainer={styles.classNameContainer}
                    classNameLabel={ClassLabelPass}
                    classNameInput={ClassInputPass}
                    placeholder=''
                    type={isShown ? "text" : "password"}
                    hidden='Set Password'
                    ClassDivError={cx('ClassDivError',{
                        ClassDivErrorVisibl:passOneDirty
                    })}
                    message={passOneError}

                    onClickBtn={isShowChange}
                    src={adress}
                    classNameBtn={styles.classInputBtn}
                />

                <Btn
                    ClassNameBtn={ClassBtn}
                    Btn_text='Sign In'
                    type='submit'
                />
                <div className={styles.toLogin}>I don't have an account <NavLink to={'/'}>Registration</NavLink></div>

            </form>
    )
}