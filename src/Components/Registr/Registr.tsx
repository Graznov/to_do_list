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
        password:'',
    })
    
    if(form.name && form.email && form.password){
        // setFormCompl(true)
        console.log('zaebca')
    }

    const ClassBtn = cx('classNameBtn',{
        classNameBtnDiss:(!form.name || !form.email || !form.password)
    })

    const [upper, setUpper] = useState(-1) //для загл буквы пароля
    if(upper===-1) setUpper(0)
// проверка имени...

    const [inputError, setInputError] = useState(true)
    const validVall:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_1234567890'

    useEffect(()=>{
        const time = setTimeout(()=>{
            setInputError(true)
        },1000)
        return () => {clearTimeout(time)}
    },[inputError])
    const changeName = (e) => {

        if(e.target.value.length<form.name.length){
            setForm({
                ...form,
                name: e.target.value
            })
            return
        }

        if(validVall.includes(e.target.value[e.target.value.length-1]) && e.target.value.length<=250){

            setForm({
                ...form,
                name: e.target.value
            })
            setInputError(true)
            return;
        } else {
            setInputError(false)
            e.target.value = form.name
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
    const changeEmail = (e) => {

        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        function isEmailValid (value){
            return EMAIL_REGEXP.test(value);
        }

        if(isEmailValid(e.target.value)){

            setInputErrorEmail(isEmailValid(e.target.value))
            setForm({
                ...form,
                email: e.target.value
            })
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

// проверка пароля...

    const [passOne,  setPassOne] = useState('')
    const [passTwo,  setPassTwo] = useState('')

    const [len, setLen] = useState(true)
    const [equality, setEquality] = useState(true)

    const changePassOne = (e) => {

        const elem = e.target.value

        if(elem.length!==0 && elem[elem.length-1]===elem[elem.length-1].toUpperCase()) {
            setUpper(upper+1)
            console.log(elem[elem.length-1])
        }

        if (elem.length>=6 && elem.length<=250){
            setLen(true)
            if(upper){
                setPassOne(elem)
                setEquality(false)
            }
            console.log(elem)
        } else {
            setLen(false)
        }

    }

    const changePassTwo = (e) => {
        const elem = e.target.value
        setPassTwo(elem)

        if(passOne === elem){
            setEquality(true)

            setForm({
                ...form,
                password: elem
            })

        }
    }

    useEffect(() => {
        console.log(`len: ${len}\nupper: ${upper}\npasswordOne: ${passOne}\npasswordTwo: ${passTwo}`)
    }, [len, upper, passOne, passTwo]);

    const ClassInputPass = cx('classNameInputPass',{
        classNameInput_red:upper<0 || !len
    });
    const ClassLabelPass = cx('classNameLabelPass',{
        classNameLabel_red:upper<0 || !len
    });

    const ClassInputPassTwo = cx('classNameInputPassTwo',{
        classNameInput_red:!equality
    });
    const ClassLabelPassTwo = cx('classNameLabelPassTwo',{
        classNameLabel_red:!equality
    });
// ...проверка пароля

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
                        onChange={changePassOne}
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={ClassLabelPass}
                        classNameInput={ClassInputPass}
                        placeholder=''
                        type='password'
                        hidden='password'
                    />

                    <Input
                        onChange={changePassTwo}
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={ClassLabelPassTwo}
                        classNameInput={ClassInputPassTwo}
                        placeholder=''
                        type='password'
                        hidden='retr password'
                    />

                    <Btn
                        ClassNameBtn={ClassBtn}
                        Btn_text='registration'
                        // disabled='disabled'
                        type='submit'
                        // ref={refBtn}
                    />
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