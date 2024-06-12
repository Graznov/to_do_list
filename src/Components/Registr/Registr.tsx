import styles from './registr.module.css'
import {Input} from "../../ui-kit/input/Input.tsx";
import TopCont from "../topCont/TopCont.tsx";



function Registr(){

    let reg = false

    return(
        <div className={styles.registr_container}>

            <TopCont/>

            <div className={styles.input_area}>
                <Input
                    classNameContainer={styles.classNameContainer}
                    classNameLabel={styles.classNameLabel}
                    classNameInput={styles.classNameInput}
                    placeholder=''
                    hidden='Email'
                />
                <Input
                    classNameContainer={styles.classNameContainer}
                    classNameLabel={styles.classNameLabel}
                    classNameInput={styles.classNameInput}
                    placeholder=''
                    hidden='password'
                />

                <Input
                    classNameContainer={styles.classNameContainer}
                    classNameLabel={styles.classNameLabel}
                    classNameInput={styles.classNameInput}
                    placeholder=''
                    hidden='retr password'
                />
            </div>


        </div>
    )
}

export default Registr