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
    //
    // console.log(form)
    //
    // if(form.name && form.email && form.password){
    //     // setFormCompl(true)
    //     console.log('zaebca')
    // }

    const ClassBtn = cx('classNameBtn',{
        classNameBtnDiss:(!form.name || !form.email || !form.password)
    })
    const [upper, setUpper] = useState(false) //для загл буквы пароля
    const [numberInPass, setNumberInPass] = useState(false)

    const [temp, setTemp] = useState('')
    const [nameCorrectSimbol, setNameCorrectSimbol] = useState(false)
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
                if(temp.length>5){
                    setForm({
                        ...form,
                        name: temp
                    })
                } else {
                    setNameError('Должно быть неменее 6 символов')
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
                if (passOne.length<6 || passOne.length>250){
                    setPassOneDirty(true)
                    setPassOneError('не менее 6 и не более 250 символов')
                    break
                }
                if(numberInPass && upper){
                    // console.log(`passOne: ${passOne} is good`)
                    setPassOneDirty(false)
                    setPassOneError('')
                    break
                } else {
                    setPassOneDirty(true)
                    setPassOneError('должна быть заглавная буква и цифра')
                }
                break
            case 'passTwo':
                setPassTwoDirty(true)
                if(form.password){
                    setPassTwoError('')
                    setPassTwoDirty(false)
                }
                if(!passTwo){
                    setPassTwoError('Поле не может быть пустым')
                    setPassTwoDirty(true)
                }
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

    useEffect(()=>{
        const time = setTimeout(()=>{
            setNameDirty(false)
            setNameBorder(false)
            setNameError('')
            setNameCorrectSimbol(false)
        },1000)
        return () => {clearTimeout(time)}
    },[nameCorrectSimbol])


    const changeName = (e) => {
        
    const elem = e.target.value
        if(elem.length===0)setTemp('')
        if(validVall.includes(elem[elem.length-1])){
            setTemp(elem)
            setNameError('')
            setNameBorder(false)
        } else {
            setNameError('Некорректный символ')
            setNameDirty(true)
            setNameBorder(true)
            setNameCorrectSimbol(true)
            e.target.value = temp
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

    // const [len, setLen] = useState(true)
    const [equality, setEquality] = useState(true)

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
    const changePassTwo = (e) => {
        const elem = e.target.value
        setPassTwo(elem)

        if(passOne === elem){
            setForm({
                ...form,
                password: elem
            })
            setPassTwoError('')
            setPassTwoDirty(false)
        } else {
            setPassTwoError('Пароли не совпадают')
            setPassTwoDirty(true)
        }
    }

    // useEffect(() => {
    //     console.log(`len:_____\nnumber: ${numberInPass}\nupper: ${upper}\npasswordOne: ${passOne}\npasswordTwo: ${passTwo}`)
    // }, [upper, passOne, passTwo, numberInPass]);


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
                        value={temp}
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
                        type='submit'
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