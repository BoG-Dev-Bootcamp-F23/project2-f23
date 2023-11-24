import { useState, useEffect } from 'react';
import styles from "../styles/CreateAccount.module.css";

export default function Login() {

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <img src="pawprint.png" className={styles.pawprint} />
                <h1>Progress</h1>
            </div>
            <div className={styles.accountBox}>
                <h1>Create Account</h1>
                <input type="text" placeholder="Full Name"  className={styles.input} />
                <input type="email" placeholder='Email' className={styles.input} />
                <input type="password" placeholder='Password' className={styles.input} />
                <input type="password" placeholder='Confirm Password' className={styles.input} />
                <label className={styles.label}>Admin Access
                    <input type="checkbox" className={styles.checkbox} />
                    <span class={styles.checkmark}></span>
                </label>
                <button type="button" className={styles.signUpButton}>Sign Up</button>
                <p>Don't have an account? <b className={styles.signIn}>Sign in</b></p>
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