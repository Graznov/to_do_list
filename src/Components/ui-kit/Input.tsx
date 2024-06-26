import {InputHTMLAttributes, ReactNode} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    classNameContainer?: string;
    classNameInput?: string;
    classNameLabel?: string;
    ClassDivError?:string;
    message?:string;
    classNameBtn?:string;
    onClickBtn;
}

export const Input = (
    {
        classNameContainer,
        classNameInput,
        classNameLabel,
        ClassBtn,
        onChange,
        hidden,
        name,
        value,
        placeholder,
        type,
        accept,
        onBlur,
        ClassDivError,
        message,
        onClickBtn,
        src,
        classNameBtn,
        altImg,
        ...restProps
    }: InputProps
): ReactNode => {
    return (
        <div className={classNameContainer}>
            <input
                className={classNameInput}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                value={value}
                accept={accept}
                name={name}
                onBlur={onBlur}
            />
            <label
                className={classNameLabel}
            >{hidden}</label>
            <div className={ClassDivError}>{message}</div>
            <button
                type='button'
                className={classNameBtn}
                onClick={onClickBtn}
            >
                <img src={src} alt=''/>
            </button>
        </div>
    );
};


// import styles from './input.module.css'
// import classNames from 'classnames';
// import {useEffect, useState} from "react";
//
//
// export default function Input ({props}){
//
//     const [email, setEmail] = useState('')
//     const [pass, setPass] = useState('')
//
//     useEffect(()=>{
//         console.log(`Email: ${email}\nPassword: ${pass}`)
//     },[pass, email])
//
//
//     let emeilValid = false
//
//     const enterVall = (e) => {
//         const entered = e.target.value
//         if(props.type==='password'){
//
//             // console.log(`Password: ${entered}`)
//             setPass(entered)
//         } else if(props.type==='text'){
//             function validateEmail (ent)  {
//                 const re = /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                 return re.test(String(ent).toLowerCase());
//             }
//             emeilValid=validateEmail(entered)
//             if(emeilValid) {
//                 setEmail(entered)
//                 console.log(email)
//             }
//         }
//     }
//     const checkStyle = classNames(styles.check,{
//         [styles.checkPass]:props.type==='password',
//         [styles.checkEmail]:props.type==='text'})
//
//     let status
//     const inpStyle = classNames(styles.check_label)
//     const showPass = (e) => {
//         status = e.target.checked
//         console.log(status)
//         if(status){
//
//         }
//
//     }
//
//     return (
//         <>
//             <div className={styles.placeholder_container}>
//                 <input className={inpStyle} onChange={enterVall} type={props.type} placeholder=" " />
//                 <label>{props.hidden}</label>
//             </div>
//             <div className={checkStyle}>
//                 <input className={inpStyle} id='passCheck' type="checkbox" onChange={showPass}/>
//                 <label className={styles.lable} htmlFor='passCheck'>Показать пароль</label>
//             </div>
//         </>
//
//
//     )
// }