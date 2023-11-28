import { useState, useEffect } from 'react';
import styles from "../styles/Login.module.css";
import Link from 'next/link';
import useUser from '../../server/utils/useUser';
import { useRouter } from 'next/router';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleClick(email, password, router) {
        const passwordBox = document.getElementById("passwordBox");
        try {
            const response = await fetch("/api/user/verify", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const data = await response.json();
            if (Object.keys(data).length > 0) {
                router.push("/training-logs");
            }
        } catch {
            passwordBox.addEventListener("invalid", (event) => {

            });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <img src="pawprint.png" className={styles.pawprint} />
                <h1>Progress</h1>
            </div>
            <div className={styles.loginBox}>
                <h1>Login</h1>
                <input type="email" value={email} onChange={e => { setEmail(e.currentTarget.value); }} placeholder='Email' className={styles.input} />
                <input id="passwordBox" type="password" value={password} onChange={e => { setPassword(e.currentTarget.value); }} placeholder='Password' className={styles.input} />
                <button type="button" className={styles.logInButton} onClick={() => {handleClick(email, password, router)}}>Log In</button>
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