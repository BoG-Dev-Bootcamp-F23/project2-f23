import React, { useState } from 'react';
import styles from '../styles/CreateTrainingLog.module.css';
import {useAuth} from "../contexts/useAuth";
import Head from 'next/head';

export default function CreateTrainingLog() {

    const {setDisplay, loginUser, animals} = useAuth();

    const filteredAnimals = animals?.filter((animal) => {
        return animal.owner === loginUser;
    });

    const [title, setTitle] = useState('');
    const [animal, setAnimal] = useState('');
    if (filteredAnimals.length > 0) {
        setAnimal(filteredAnimals[0]._id);
    }

    const [hours, setHours] = useState('');
    const [month, setMonth] = useState('January');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [notes, setNotes] = useState('');

    const [invalidHours, setInvalidHours] = useState(false);
    const [invalidDate, setInvalidDate] = useState(false);
    const [invalidYear, setInvalidYear] = useState(false);
    const thirtyDays = ['April', 'June', 'September', 'November'];

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("handlesubmit");
        console.log(animal);
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
        const data = await result.json();
        console.log(data);
        return data;
    }

    function checkDateValidity(date) {
        if (month === 'February') {
            return date <= 29 && date >= 1
        } else if (thirtyDays.includes(month)) {
            return date <= 30 && date >= 1
        } else {
            return date <= 31 && date >= 1
        }
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
                <select id="animal" value={animal} className={styles.input} onChange={(e) => {
                    setAnimal(e.target.value)
                    }} required>
                    {filteredAnimals.map(animal => (
                        <option key={animal._id} value={animal._id}>{animal.name} - {animal.breed}</option>
                    ))}
                </select>

                <label htmlFor="hours" className={styles.titleText}>Total hours trained</label>
                <input type="number" id="hours" value={hours} style={{backgroundColor: invalidHours ? '#f7bac6' : 'white'}} className={styles.input} onChange={(e) => {
                    setHours(e.target.value)
                    if (e.target.value < 0) {
                        setInvalidHours(true);
                    } else {
                        setInvalidHours(false);
                    }
                }} min="0" step="0.5" required />
                
                <div className={styles.mdy}>
                    <div className={styles.month}>
                        <label className={styles.titleText}>Month</label>
                        <select id="month" value={month} className={styles.input} onChange={(e) => {
                            setMonth(e.target.value)
                        }} required>
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
                        <input type="number" id="day" value={day} style={{backgroundColor: invalidDate ? '#f7bac6' : 'white'}} className={styles.input} onChange={(e) => {
                            setDay(e.target.value);
                            if (e.target.value.length === 0) {
                                setInvalidDate(false);
                            } else {
                                const isDateValid = checkDateValidity(e.target.value);
                                if (isDateValid) {
                                    setInvalidDate(false);
                                } else {
                                    setInvalidDate(true);
                                }
                            }
                        }} min="1" max="31" required />
                    </div>

                    <div className={styles.year}>
                        <label className={styles.titleText}>Year</label>
                        <input type="number" id="year" value={year} style={{backgroundColor: invalidYear ? '#f7bac6' : 'white'}} className={styles.input} onChange={(e) => {
                            setYear(e.target.value)
                            if (e.target.value.length === 0) {
                                setInvalidYear(false);
                            } else {
                                if (e.target.value <= 0) {
                                    setInvalidYear(true);
                                } else setInvalidYear(false);
                            }
                        }} min="1900" max="2100" required />
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
