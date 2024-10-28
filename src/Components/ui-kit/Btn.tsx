
interface Btn {
    Btn_text:string | JSX.Element,
    ClassNameBtn:string,
    type:"submit" | "reset" | "button" | undefined,
    onClick:()=>void,
}

function Btn({
                Btn_text,
                ClassNameBtn,
                type,
                onClick,

             }:Btn){

    return(
        <button
            className={ClassNameBtn}
            onClick={onClick}
            type={type}>
            {Btn_text}
        </button>
    )
}

export default Btn