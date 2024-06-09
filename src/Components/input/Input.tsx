import styles from './input.module.css'

export default function Input (){
    
    
    return (

        <div className={styles.placeholder_container}>
            <input type="text" placeholder=" " />
            <label>Email</label>
        </div>

    )
}