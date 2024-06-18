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

    console.log(form)

    if(form.name && form.email && form.password){
        // setFormCompl(true)
        console.log('zaebca')
    }

    const ClassBtn = cx('classNameBtn',{
        classNameBtnDiss:(!form.name || !form.email || !form.password)
    })
    const [upper, setUpper] = useState(-1) //для загл буквы пароля
    if(upper===-1) setUpper(0)

    const [temp, setTemp] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [nameBorder, setNameBorder] = useState(false)
    const [nameError, setNameError] = useState('Поле не может быть пустым')

    const [emailDirty, setEmailDirty] = useState(false)
    const [emailBorder, setEmailBorder] = useState(false)
    const [emailError, setEmailError] = useState('Поле не может быть пустым')

    const [passOneDirty, setPassOneDirty] = useState(false)
    const [passOneError, setPassOneError] = useState('Поле не может быть пустым')

    const [passTwoDirty, setPassTwoDirty] = useState(false)
    const [passTwoError, setPassTwoError] = useState('Поле не может быть пустым')


    const blurHandler = (e) => {
        switch (e.target.name){
            case 'name':
                if(!form.name){
                    setNameDirty(true)
                    setNameBorder(true)
                }

                break
            case 'email':
                if(!form.email){
                    setEmailDirty(true)
                    setEmailBorder(true)
                }
                break
            case 'passOne':
                setPassOneDirty(true)
                break
            case 'passTwo':
                setPassTwoDirty(true)
                break
        }
    }

    const ClassInput = cx('classNameInput',{
        classNameInput_red:nameDirty && nameBorder
    });
    const ClassLabel = cx('classNameLabel',{
        classNameLabel_red:nameDirty && nameBorder
    });

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

    const ClassInputPassTwo = cx('classNameInputPassTwo',{
        classNameInput_red:passTwoDirty
    });
    const ClassLabelPassTwo = cx('classNameLabelPassTwo',{
        classNameLabel_red:passTwoDirty
    });

// проверка имени...

    const validVall:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_1234567890'

    // useEffect(()=>{
    //     const time = setTimeout(()=>{
    //         setNameDirty(true)
    //     },1000)
    //     return () => {clearTimeout(time)}
    // },[nameDirty])


    const changeName = (e) => {
        
    const elem = e.target.value
        if(elem.length<elem.length){
            // setForm({
            //     ...form,
            //     name: e.target.value
            // })
            // setTemp(elem)
            // return
        }

        if(validVall.includes(elem[elem.length-1])){
            setTemp(elem)
            // setForm({
            //     ...form,
            //     name: e.target.value
            // })

            if(elem.length<6){
                setNameBorder(false)
                setNameError('Должно быть неменее 6 символов')
                return;
            }


            setNameError('')
            setNameBorder(false)
            // setInputError(true)
            // setNameDirty(false)
            // return;
        } else {
            // setTemp()
            setNameError('Некорректный символ')
            setNameDirty(true)
            setNameBorder(true)
            e.target.value = temp
            // return;
        }

        if (elem.length>5){

            setForm({
                ...form,
                name: elem
            })

        }


    }


// ...проверка имени

// проверка почты...
    const changeEmail = (e) => {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        function isEmailValid (value){
            return EMAIL_REGEXP.test(value);
        }
        if(isEmailValid(e.target.value)){
            setForm({
                ...form,
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
                        name='name'
                        // value={temp}
                        onBlur={e => blurHandler(e)}
                        onChange={changeName}
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={ClassLabel}
                        classNameInput={ClassInput}
                        placeholder=''
                        type='text'
                        hidden='Username'
                        ClassDivError={cx('ClassDivError',{
                            ClassDivErrorVisibl:nameDirty
                        })}
                        message={nameError}
                    />

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
                    />
                    <Input
                        name='passOne'
                        onBlur={e => blurHandler(e)}
                        onChange={changePassOne}
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={ClassLabelPass}
                        classNameInput={ClassInputPass}
                        placeholder=''
                        type='password'
                        hidden='password'
                        ClassDivError={cx('ClassDivError',{
                            ClassDivErrorVisibl:passOneDirty
                        })}
                        message={passOneError}
                    />

                    <Input
                        name='passTwo'
                        onBlur={e => blurHandler(e)}
                        onChange={changePassTwo}
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={ClassLabelPassTwo}
                        classNameInput={ClassInputPassTwo}
                        placeholder=''
                        type='password'
                        hidden='retr password'
                        ClassDivError={cx('ClassDivError',{
                            ClassDivErrorVisibl:passTwoDirty
                        })}
                        message={passTwoError}
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