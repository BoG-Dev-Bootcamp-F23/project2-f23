import styles from '../styles/CreateAccount.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateAccount() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [admin, setAdmin] = useState(false);
    const router = useRouter();

    const handleBlur = (event) => {
        if (event.target.validity.patternMismatch) {
            // error handling
        }
    }

    const handleSubmit = async(e) => {
        try {
            e.preventDefault()
            await createUser()
            router.push('/Login')
        } catch (e) {

        }
    }

    async function createUser() {
        if (password !== confirm) {
            // error handling
        }
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ fullName, email, password, admin })
        })

        if (response.status === 'Failed to create because user exists already') {
            console.log("user exists already")
        } else if (response.status === 'Failed to create because external issues') {
            // what do I do here?
        }
    }

    return (
        
        <div className={styles.flexbox}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap" rel="stylesheet" />
            </Head>
            <h1 className={styles.title}>Create Account</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" 
                    className={styles.input}
                    id="fullName" 
                    placeholder="Full Name"
                    pattern="^[a-zA-Z]+(\s[a-zA-Z]+)+"
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={handleBlur}
                    required></input>
                <input type="email" 
                    className={styles.input}
                    id="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} 
                    onBlur={handleBlur}
                    required></input>
                <input type="password" 
                    className={styles.input}
                    id="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    required></input>
                <input type="password" 
                    className={styles.input}
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirm(e.target.value)} 
                    required></input>
                <label className={styles.adminText}><input type="checkbox" 
                    className={styles.input}
                    onChange={(e) => setAdmin(!admin)}></input>
                    Admin access</label>
                <button className={styles.button} type="submit">Sign up</button>
            </form>
            <p className={styles.bottomNote}>Already have an account? <a className={styles.click} onClick={() => {
                router.push('/Login')
            }}>Sign in</a></p>
        </div>
    );
}