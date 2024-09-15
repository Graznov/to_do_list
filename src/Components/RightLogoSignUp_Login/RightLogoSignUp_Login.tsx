import styles from "./RightlogoSignUp_Login.module.css";

export const RightLogoSignUp_Login = () => {

    return(
        <div className={styles.registr_container_right}>
            <img className={styles.imgRightLogoSignUp_Login}
                src=".\public\log_in_logo.png"
                alt="logo"
            />
        </div>
    )
}