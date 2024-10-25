
function Btn({
                Btn_text,
                ClassNameBtn,
                type,
                onClick,
                disabled
             }){

    return(
        <button
            className={ClassNameBtn}
            disabled
            onClick={onClick}
            type={type}>
            {Btn_text}
        </button>
    )
}

export default Btn