import styles from './registr.module.css'
import TopCont from "../topCont/TopCont.tsx";
import Title_3 from "../ui-kit/title_3.tsx";
import {RightLogoSignUp_Login} from "../RightLogoSignUp_Login/RightLogoSignUp_Login.tsx";
import {NewAccount} from "../NewAccount/NewAccount.tsx";
import {NavLink, Outlet} from "react-router-dom";

function Registr(){

    return(
        <div className={styles.registr_container}>

            <div className={styles.registr_container_left}>
                <div>
                    <TopCont/>
                </div>
                <NavLink to={'/workwindow'}>
                    временная ссылка на рабочую страницу
                </NavLink>
                <Title_3
                    ClassNameTitle_3={styles.input_area_Zag}
                    title_text='Sign Up'
                />
                <Outlet/>

            </div>

            <div className={styles.registr_container_right}>

                <RightLogoSignUp_Login/>
            </div>



        </div>
    )
}

export default Registr