import {InputHTMLAttributes, ReactNode} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    classNameContainer?: string;
    classNameInput?: string;
    classNameLabel?: string;
    ClassDivError?:string;
    message?:string;
    classNameBtn?:string;
    hidden:string;
    onClickBtn;
    reactSvg?;
    BTNdisabled?
}

export const Input = (
    {
        classNameContainer,
        classNameInput,
        classNameLabel,
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
        reactSvg,
        BTNdisabled
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
                disabled={BTNdisabled}
                type='button'
                className={classNameBtn}
                onClick={onClickBtn}
            >
                {reactSvg}
                <img src={src} alt=''/>
            </button>
        </div>
    );
};
