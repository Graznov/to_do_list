import styles from './registr.module.css'
import Input from "../input/Input.tsx";

interface inputRegistr {
    type : string,
    hidden : string
}

const textInp:inputRegistr = {
    type:'text',
    hidden:'Email'
}

const passInp:inputRegistr = {
    type : 'password',
    hidden : 'password'
}



function Registr(){

    let reg = false

    return(
        <div className={styles.registr_container}>
            <div className={styles.top_cont}>
                <img
                    src=".\public\checklist-minimalistic-svgrepo-com.svg"
                    alt="logo"
                    width={'30px'}
                />
                <h1>Focus flow</h1>
            </div>
            <Input props={textInp}/>
            <Input props={passInp}/>
            <Input props={passInp}/>

        </div>
    )
}

export default Registr