import { useState, useEffect } from 'react';
import styles from "../styles/Login.module.css";
import Link from 'next/link';

export default function Login() {

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <img src="pawprint.png" className={styles.pawprint} />
                <h1>Progress</h1>
            </div>
            <div className={styles.loginBox}>
                <h1>Login</h1>
                <input type="email" placeholder='Email' className={styles.input} />
                <input type="password" placeholder='Password' className={styles.input} />
                <button type="button" className={styles.logInButton}>Log In</button>
                <p>Don't have an account? <Link href="create-account"><b className={styles.signUp}>Sign up</b></Link></p>
            </div>
            <div className={styles.footer}>
                <p>Made with ♡ by Team Elephant<br />© 2023 BOG Developer Bootcamp. All rights reserved.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                    <circle className={styles.circle} cx="0" cy="100%" r="60%" />
            </svg>
        </div>
    );
}