import styles from '../styles/CreateAccount.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import TitleBar from '../components/TitleBar';

export default function CreateAccount() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [match, setMatch] = useState(true);

    const [admin, setAdmin] = useState(false);
    const router = useRouter();

    const handleBlur = (event) => {
        if (password !== confirm && password.length > 0 && confirm.length > 0) {
            setMatch(false)
        } else {
            setMatch(true)
        }
    }

    const checkName = (event) => {
        if (event.target.validity.patternMismatch) {
            event.preventDefault()
            setNameValid(false)
        } else {
            setNameValid(true)
        }
    }

    const checkEmail = (event) => {
        if (event.target.validity.patternMismatch) {
            event.preventDefault()
            setEmailValid(false)
        } else {
            setEmailValid(true)
        }
    }

    const handleSubmit = async(e) => {
        try {
            e.preventDefault()
            if (password === confirm) {
                setMatch(true)
                await createUser()
                router.push('/Login')
            } else {
                setMatch(false)
            }
        } catch (e) {

        }
    }

    async function createUser() {
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
        <div>
            <TitleBar />
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
                        onBlur={checkName}
                        style={{backgroundColor: nameValid ? 'white' : '#f7bac6'}}
                        required></input>
                    <input type="email" 
                        className={styles.input}
                        id="email" 
                        placeholder="Email"
                        pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
                        onChange={(e) => setEmail(e.target.value)} 
                        onBlur={checkEmail}
                        style={{backgroundColor: emailValid ? 'white' : '#f7bac6'}}
                        required></input>
                    <input type="password" 
                        className={styles.input}
                        id="password" 
                        placeholder="Password"
                        style={{backgroundColor: match ? 'white' : '#f7bac6'}}
                        onChange={(e) => setPassword(e.target.value)} 
                        onBlur={handleBlur}
                        required></input>
                    <input type="password" 
                        className={styles.input}
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        style={{backgroundColor: match ? 'white' : '#f7bac6'}}
                        onChange={(e) => setConfirm(e.target.value)} 
                        onBlur={handleBlur}
                        required></input>
                    <div className={styles.checkbox}><label className={styles.line}><input type="checkbox" 
                        onChange={(e) => setAdmin(!admin)} />
                        <div className={styles.adminText}>Admin access</div></label></div>
                    <button className={styles.button} type="submit">Sign up</button>
                </form>
                <p className={styles.bottomNote}>Already have an account? <a className={styles.click} onClick={() => {
                    router.push('/Login')
                }}>Sign in</a></p>
            </div>
        </div>
    );
}