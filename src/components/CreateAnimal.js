import React, { useState } from 'react';
import styles from '../styles/CreateAnimal.module.css';
import fetchAnimals from "../pages/MainPage"
import { useAuth } from "../contexts/useAuth"

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
        {/* <div> */}
            <form onSubmit={handleSubmit} className={styles.formContainer}>
            
            {/* <form onSubmit={handleSubmit} > */}
                <label htmlFor="animalName">Animal Name:</label>
                <input type="text" id="animalName" placeholder="Name" value={animalName} onChange={(e) => setAnimalName(e.target.value)} required />

                <label htmlFor="breed">Breed:</label>
                <input type="text" id="breed" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} required />

                <label htmlFor="hours">Total Hours Trained:</label>
                <input type="number" id="hours" value={hours} onChange={(e) => setHours(e.target.value)} min="0" step="0.5" required />

                <label>Birth Month</label>
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

                <label htmlFor="notes">Note</label>
                <textarea id="notes" value={notes} placeholder="Note" onChange={(e) => setNotes(e.target.value)} rows="4"></textarea>

                <button onClick = {() => {
                    setDisplay(1);
                }}>Cancel</button>

                <button type="submit" onClick = {(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Submit</button>
            </form>
        </div>
    );
};