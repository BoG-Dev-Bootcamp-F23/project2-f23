import React, { useState } from 'react';
// import styles from './CreateTrainingLog.module.css';

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

export default function CreateTrainingLog({ display, setDisplay}) {
    const [title, setTitle] = useState('');
    const [animal, setAnimal] = useState('');
    const [hours, setHours] = useState('');
    const [month, setMonth] = useState('January');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = () => {
      console.log({
        title,
        animal,
        hours,
        date: `${month} ${day}, ${year}`,
        notes,
      });
    };

    return (
        // <div className={styles.trainingLogContainer}>
        <div>
            {/* <form onSubmit={handleSubmit} className={styles.formContainer}> */}
            <form onSubmit={handleSubmit} >
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="animal">Select Animal:</label>
                { /* placeholder options below rn
                */}
                <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} required>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
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
