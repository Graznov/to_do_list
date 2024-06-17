
function Btn({
                Btn_text,
                ClassNameBtn,
             }){

    return(
        <button
            className={ClassNameBtn}>
            {Btn_text}
        </button>
    )
}

export default Btn