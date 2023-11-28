import React, { useState } from 'react';
import styles from '../styles/CreateTrainingLog.module.css';

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

export default function CreateTrainingLog({ display, setDisplay, userID, animals}) {
    const [title, setTitle] = useState('');
    const [animal, setAnimal] = useState('');
    const [hours, setHours] = useState('');
    const [month, setMonth] = useState('January');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [notes, setNotes] = useState('');

    async function handleSubmit() {
        const param = {
            user: userID,
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
        const data = await result.json()
        console.log(data);
        return data;
    }
    const filteredAnimals = animals.filter((animal) => {
        return animal.owner === userID;
    });

    return (
        <div className={styles.trainingLogContainer}>
        {/* <div> */}
            <form onSubmit={handleSubmit} className={styles.formContainer}>
            {/* <form onSubmit={handleSubmit} > */}
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="animal">Select Animal:</label>
                {/*
                <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} required>
                    {animals.map(animal => (
                        <option value={animal._id}>{animal.name} - {animal.breed}</option>
                    ))}
                </select>
                */}
                <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} required>
                    {filteredAnimals.map(animal => (
                        <option value={animal._id}>{animal.name} - {animal.breed}</option>
                    ))}
                </select>

                <label htmlFor="hours">Total Hours Trained:</label>
                <input type="number" id="hours" value={hours} onChange={(e) => setHours(e.target.value)} min="0" step="0.5" required />

                <label>Month</label>
                <select id="month" value={month} onChange={(e) => setMonth(e.target.value)} required>
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

                <label>Date</label>
                <input type="number" id="day" value={day} onChange={(e) => setDay(e.target.value)} min="1" max="31" required />

                <label>Year</label>
                <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min="1900" max="2100" required />

                <label htmlFor="notes">Note:</label>
                <textarea id="notes" value={notes} placeholder="Note" onChange={(e) => setNotes(e.target.value)} rows="4"></textarea>

                <button onClick = {() => {
                    setDisplay(0);
                }}>Cancel</button>

                <button type="submit" onClick = {(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Submit</button>
            </form>
        </div>
    );
};
