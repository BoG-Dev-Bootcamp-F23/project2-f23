import styles from '../styles/login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function handleSubmit() {
        const response = await login();
        console.log(response);
        router.push({
            pathname: '/MainPage',
            query: {
                userID: response.userID,
                admin: response.admin
            }
        })
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
        <div className={styles.flexbox}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form}>
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
                <button className={styles.button} type="submit" onClick={(e) => {
 
                    e.preventDefault();                   
                    handleSubmit();
                    console.log("aisdofjajsdlf")
                    // const response = login();
                    // console.log(response);
                    // router.push({
                    //     pathname: '/MainPage',
                    //     query: {
                    //         userID: response.userID,
                    //         admin: response.admin
                    //     }
                    // })
                }}>Log in</button>
            </form>
            <p className={styles.bottomNote}>Don't have an account? <a className={styles.click} onClick={() => {
                const response = login();
                router.push({
                    pathname: '/MainPage',
                    query: {
                        userID: response.userID,
                        admin: response.admin
                    }
                })
            }}>Sign up</a></p>
        </div>
    );
}