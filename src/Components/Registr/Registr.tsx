import styles from './registr.module.css'
import {Input} from "../../ui-kit/Input.tsx";
import TopCont from "../topCont/TopCont.tsx";
import Title_3 from "../../ui-kit/title_3.tsx";
import Btn from "../../ui-kit/Btn.tsx";
import {useEffect, useState} from "react";
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

function Registr(){

    const [form, setForm] = useState({
        name:'',
        email:'',
        password:''
    })

// проверка имени...

    const [inputError, setInputError] = useState(true)
    const [userName, setUserName] = useState('')
    const validVall:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_1234567890'

    useEffect(()=>{
        const time = setTimeout(()=>{
            setInputError(true)
        },1000)
        return () => {clearTimeout(time)}
    },[inputError])
    const changeName = (e) => {

        if(e.target.value.length<userName.length){
            setUserName(e.target.value)
            return
        }

        if(validVall.includes(e.target.value[e.target.value.length-1]) && e.target.value.length<=250){
            setUserName(e.target.value)
            setInputError(true)
            return;
        } else {
            setInputError(false)
            e.target.value = userName
            return;
        }
    }

    const ClassInput = cx('classNameInput', '111',{
        classNameInput_red:!inputError
    });
    const ClassLabel = cx('classNameLabel',{
        classNameLabel_red:!inputError
    });
// ...проверка имени

// проверка почты...
    const [inputErrorEmail, setInputErrorEmail] = useState(true)
    const [email, setEmail] = useState('')
    const changeEmail = (e) => {

        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        function isEmailValid (value){
            return EMAIL_REGEXP.test(value);
        }

        if(isEmailValid(e.target.value)){
            setEmail(e.target.value)
            console.log(`email: ${email}`)
            setInputErrorEmail(isEmailValid(e.target.value))
        } else {
            setInputErrorEmail(isEmailValid(e.target.value))
        }

    }
    const ClassInputEmail = cx('classNameInputEmail',{
        classNameInput_red:!inputErrorEmail
    });
    const ClassLabelEmail = cx('classNameLabelEmail',{
        classNameLabel_red:!inputErrorEmail
    });
// ...проверка почты
    return(
        <div className={styles.registr_container}>

            <div className={styles.registr_container_left}>
                <TopCont/>
                <Title_3
                    ClassNameTitle_3={styles.input_area_Zag}
                    title_text='sign up'
                />
                <form className={styles.input_area}>

                    <Input
                        onChange={changeName}
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={ClassLabel}
                        classNameInput={ClassInput}
                        placeholder=''
                        type='text'
                        hidden='Username'
                    />
                    <Input
                        onChange={changeEmail}
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={ClassLabelEmail}
                        classNameInput={ClassInputEmail}
                        placeholder=''
                        type='email'
                        hidden='Email'
                    />
                    <Input
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={styles.classNameLabel}
                        classNameInput={styles.classNameInput}
                        placeholder=''
                        type='password'
                        hidden='password'
                    />

                    <Input
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={styles.classNameLabel}
                        classNameInput={styles.classNameInput}
                        placeholder=''
                        type='password'
                        hidden='retr password'
                    />

                    <Btn
                        ClassNameBtn={styles.classNameBtn}
                        Btn_text='registration'
                        type='submit'/>
                </form>


            </div>

            <div className={styles.registr_container_right}>
                <img
                    src=".\public\log_in_logo.png"
                    alt="logo"
                />
            </div>


        </div>
    )
}

export default Registr