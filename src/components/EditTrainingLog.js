import React, { useState } from 'react';
import styles from '../styles/CreateTrainingLog.module.css';
import { useAuth } from "../contexts/useAuth"

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

export default function EditTrainingLog() {
    const {setDisplay, animals, editLog, setEditLog} = useAuth();

    const [title, setTitle] = useState(editLog.title);    
    
    const filteredAnimals = animals.filter((animal) => {
        return animal._id === editLog.animal;
    });
    const [animal, setAnimal] = useState(filteredAnimals[0]);

    const [hours, setHours] = useState(editLog.hours);

    const old_date = new Date(editLog.date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [month, setMonth] = useState(monthNames[old_date.getMonth()]);
    const [day, setDay] = useState(old_date.getDate());
    const [year, setYear] = useState(old_date.getFullYear());

    const [notes, setNotes] = useState(editLog.description);

    async function handleSubmit() {
        const param = {
            trainingLogID: editLog._id,
            user: editLog.user,
            animal: editLog.animal,
            title,
            date: `${month} ${day}, ${year}`,
            description: notes,
            hours,
        };
        const response = await editlog(param);
        console.log(response);
        if (response.status === "success") {
            setEditLog(null);
            setDisplay(0);
        } else {
            //error handling
        }
    };

    async function handleDelete() {
        const param = {
            trainingLogID: editLog._id,
        };
        const response = await deletelog(param);
        console.log(response);
        if (response.status === "success") {
            setEditLog(null);
            setDisplay(0);
        } else {
            //error handling
        }
    }
    
    async function editlog(param) {
        console.log(param.user);
        const result = await fetch('/api/training', {
            method: 'PATCH',
            body: JSON.stringify(param)
        })
        // throw new Error("here");
        const data = await result.json();
        console.log(data);
        return data;
    }

    async function deletelog(param) {
        // console.log(param.user);
        const result = await fetch('/api/training', {
            method: 'DELETE',
            body: JSON.stringify(param)
        })
        // throw new Error("here");
        const data = await result.json();
        console.log(data);
        return data;
    }

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

                <button onClick = {(e) => {
                    e.preventDefault();
                    handleDelete();
                }}> Delete </button>

                <button type="submit" onClick = {(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Submit</button>
            </form>
        </div>
    );
};
