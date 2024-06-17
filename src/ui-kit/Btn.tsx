
function Btn({
                Btn_text,
                ClassNameBtn,
                type
             }){

    return(
        <button
            className={ClassNameBtn}
            type={type}>
            {Btn_text}
        </button>
    )
}

export default Btn