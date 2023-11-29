import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TitleBar from '../components/TitleBar';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await login();
        if (response.status) {
            // error handling;
        } else {
            router.push({
                pathname: '/MainPage',
                query: {
                    userID: response.userID,
                    admin: response.admin
                }
            })
        }
    }

    async function login() {
        const result = await fetch('/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
        // throw new Error("here");
        const data = await result.json()
        return data;
    }

    return (
        <div>
            <TitleBar />
            <div className={styles.flexbox}>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap" rel="stylesheet" />
                </Head>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="email" 
                        className={styles.input} 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} 
                        required></input>
                    <input type="password" 
                        className={styles.input} 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} 
                        required></input>
                    <button className={styles.button} type="submit">Log in</button>
                </form>
                <p className={styles.bottomNote}>Don't have an account? <a className={styles.click} onClick={() => {
                    router.push('./CreateAccount');
                }}>Sign up</a></p>
            </div>
        </div>
    );
}