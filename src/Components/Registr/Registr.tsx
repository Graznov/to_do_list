import styles from './registr.module.css'
import {Input} from "../../ui-kit/Input.tsx";
import TopCont from "../topCont/TopCont.tsx";
import Title_3 from "../../ui-kit/title_3.tsx";
import Btn from "../../ui-kit/Btn.tsx";
import {useEffect, useState} from "react";
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

let inputError:boolean = true
function Registr(){

    const ClassInput = cx('classNameInput', '111',{
        classNameInput_red:!inputError
    });
    const ClassLabel = cx('classNameLabel',{
        'classNameLabel_red':!inputError
    });
    // useEffect(()=>{
    //     let timerId
    //     if(!isValid.title || !isValid.text || !isValid.date){
    //         timerId = setTimeout(()=>{
    //             console.log('Timer')
    //             dispatchForm( { type : 'RESET_VALIDITY' } )
    //         },1000)
    //     }
    //     return () => {
    //         clearTimeout(timerId)
    //     }
    // }, [isValid])


    //
    // useEffect(()=>{
    //     console.log(`userName: ${userName}\ninputError: ${inputError}`)
    //     const time = setTimeout(()=>{
    //         inputError=true
    //         console.log(`TIMER\ninputError: ${inputError}`)
    //     },1000)
    //     // clearTimeout(time)
    //
    // },[inputError])

    const [userName, setUserName] = useState('')
    const validVall:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_1234567890'
    const changeName = (e) => {

        if(e.target.value.length<userName.length){
            setUserName(e.target.value)
            return
        }

        if(validVall.includes(e.target.value[e.target.value.length-1]) && e.target.value.length<=250){
            setUserName(e.target.value)
            inputError=true
        } else {
            inputError=false
            // const time = setTimeout(()=>{
            //     inputError=true
            console.log(`TIMER\ninputError: ${inputError}`)
            // },1000)
            // clearTimeout(time)

            e.target.value = userName
        }
        console.log(`inputError: ${inputError}`)
    }



    return(
        <div className={styles.registr_container}>

            <div className={styles.registr_container_left}>

                <div className={styles.input_area}>
                    <TopCont/>
                    <Title_3
                        ClassNameTitle_3={styles.input_area_Zag}
                        title_text='sign up'
                    />
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
                        classNameContainer={styles.classNameContainer}
                        classNameLabel={styles.classNameLabel}
                        classNameInput={styles.classNameInput}
                        placeholder=''
                        type='text'
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
                        Btn_text='registration'/>
            </div>


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