import styles from "./topCont.module.css";

function TopCont(){

    return(
        <div className={styles.top_cont}>
            <img
                src=".\public\checklist-minimalistic-svgrepo-com.svg"
                alt="logo"
                width={'30px'}
            />
            <h1>Focus flow</h1>
        </div>
    )
}

export default TopCont
