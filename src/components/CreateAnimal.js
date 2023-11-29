import React, { useState } from 'react';
import styles from '../styles/CreateAnimal.module.css';
import { useAuth } from "../contexts/useAuth"
import Head from 'next/head';

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

export default function CreateAnimal() {

    const {setDisplay, loginUser} = useAuth();

    const [animalName, setAnimalName] = useState('');
    const [breed, setBreed] = useState('');
    const [hours, setHours] = useState('');
    const [month, setMonth] = useState('January');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [notes, setNotes] = useState('');

    async function handleSubmit() {
    //   e.preventDefault();
        const param = {
            name: animalName,
            breed,
            owner: loginUser,
            hoursTrained: hours,
            profilePicture: notes,
        };
        const response = await createanimal(param);
        console.log(response);
        if (response.status === "success") {
            setDisplay(1);
        } else {
            //error handling
        } 
    };

    async function createanimal(param) {
        console.log(param.name);
        const result = await fetch('/api/animal', {
            method: 'POST',
            body: JSON.stringify(param)
        })
        // throw new Error("here");
        const data = await result.json()
        console.log(data);
        return data;
    }

    return (
        <div className={styles.animalContainer}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap" rel="stylesheet" />
            </Head>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label htmlFor="animalName" className={styles.titleText}>Animal Name</label>
                <input type="text" id="animalName" className={styles.input} placeholder="Name" value={animalName} onChange={(e) => setAnimalName(e.target.value)} required />

                <label htmlFor="breed" className={styles.titleText}>Breed</label>
                <input type="text" id="breed" className={styles.input} placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} required />

                <label htmlFor="hours" className={styles.titleText}>Total hours trained</label>
                <input type="number" id="hours" value={hours} className={styles.input} onChange={(e) => setHours(e.target.value)} min="0" step="0.5" required />

                <div className={styles.mdy}>
                    <div className={styles.month}>
                        <label className={styles.titleText}>Birth Month</label>
                        <select className={styles.input} id="month" value={month} onChange={(e) => setMonth(e.target.value)} required>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>np
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                    <div className={styles.day}>
                        <label className={styles.titleText}>Date</label>
                        <input className={styles.input} type="number" id="day" value={day} onChange={(e) => setDay(e.target.value)} min="1" max="31" required />
                    </div>

                    <div className={styles.year}>
                        <label className={styles.titleText}>Year</label>
                        <input className={styles.input} type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min="1900" max="2100" required />
                    </div>
                </div>

                <label htmlFor="notes" className={styles.titleText}>Note</label>
                <textarea className={styles.input + " " + styles.textarea} id="notes" value={notes} placeholder="Note" onChange={(e) => setNotes(e.target.value)} rows="4"></textarea>

                <div className={styles.twoButtons}>
                    <button className={styles.cancel} onClick = {() => {
                        setDisplay(1);
                    }}>Cancel</button>

                    <button className={styles.submit} type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};