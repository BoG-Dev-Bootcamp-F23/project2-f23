import React, { useState } from 'react';
import styles from '../styles/CreateTrainingLog.module.css';
import {useAuth} from "../contexts/useAuth";
import Head from 'next/head';

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

export default function CreateTrainingLog() {

    const {setDisplay, loginUser, animals} = useAuth();

    const filteredAnimals = animals.filter((animal) => {
        return animal.owner === loginUser;
    });

    const [title, setTitle] = useState('');
    const [animal, setAnimal] = useState('');
    const [hours, setHours] = useState('');
    const [month, setMonth] = useState('January');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [notes, setNotes] = useState('');

    async function handleSubmit() {
        const param = {
            user: loginUser,
            animal,
            title,
            date: `${month} ${day}, ${year}`,
            description: notes,
            hours,
        };
        const response = await createlog(param);
        console.log(response);
        if (response.status === "success") {
            setDisplay(0);
        } else {
            //error handling
        }
    };
    
    async function createlog(param) {
        console.log(param.user);
        const result = await fetch('/api/training', {
            method: 'POST',
            body: JSON.stringify(param)
        })
        // throw new Error("here");
        const data = await result.json();
        console.log(data);
        return data;
    }

    return (
        <div className={styles.trainingLogContainer}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap" rel="stylesheet" />
            </Head>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label htmlFor="title" className={styles.titleText}>Title</label>
                <input type="text" id="title" className={styles.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="animal" className={styles.titleText}>Select Animal</label>
                {/*
                <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} required>
                    {animals.map(animal => (
                        <option value={animal._id}>{animal.name} - {animal.breed}</option>
                    ))}
                </select>
                */}
                <select id="animal" value={animal} className={styles.input} onChange={(e) => setAnimal(e.target.value)} required>
                    {filteredAnimals.map(animal => (
                        <option value={animal._id}>{animal.name} - {animal.breed}</option>
                    ))}
                </select>

                <label htmlFor="hours" className={styles.titleText}>Total hours trained</label>
                <input type="number" id="hours" value={hours} className={styles.input} onChange={(e) => setHours(e.target.value)} min="0" step="0.5" required />
                
                <div className={styles.mdy}>
                    <div className={styles.month}>
                        <label className={styles.titleText}>Month</label>
                        <select id="month" value={month} className={styles.input} onChange={(e) => setMonth(e.target.value)} required>
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
                        <input type="number" id="day" value={day} className={styles.input} onChange={(e) => setDay(e.target.value)} min="1" max="31" required />
                    </div>

                    <div className={styles.year}>
                        <label className={styles.titleText}>Year</label>
                        <input type="number" id="year" value={year} className={styles.input} onChange={(e) => setYear(e.target.value)} min="1900" max="2100" required />
                    </div>
                </div>

                <label htmlFor="notes" className={styles.titleText}>Note</label>
                <textarea id="notes" value={notes} placeholder="Note" className={styles.input + " " + styles.textarea} onChange={(e) => setNotes(e.target.value)} rows="4"></textarea>

                <div className={styles.twoButtons}>
                    <button className={styles.cancel} onClick = {() => {
                        setDisplay(0);
                    }}>Cancel</button>

                    <button className={styles.submit} type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};
