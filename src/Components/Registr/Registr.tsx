import styles from './registr.module.css'
import {Input} from "../../ui-kit/Input.tsx";
import TopCont from "../topCont/TopCont.tsx";
import Title_3 from "../../ui-kit/title_3.tsx";
import Btn from "../../ui-kit/Btn.tsx";



function Registr(){


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