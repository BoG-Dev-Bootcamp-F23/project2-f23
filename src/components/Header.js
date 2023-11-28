import styles from "../styles/Header.module.css";
export default function Header() {
    return (

        <div className={styles.navbar}>
                <img src="pawprint.png" className={styles.pawprint} />
                <h1>Progress</h1>
        </div>

    )
}