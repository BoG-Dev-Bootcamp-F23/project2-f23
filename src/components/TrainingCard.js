// import React, { useState, useEffect } from 'react';

// export default function TrainingCard({ log }) {

//     return (
//         <div>
//             <div className = "date">
//                 <p> {log.date} </p>
//             </div>
//             <div className = "information">
//                 <p> {log.title} </p>
//                 <p> {log.hours}</p>
//                 <p> {log.user}</p>
//                 <p> {log.animal}</p>
//                 <p> {log.description}</p>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import styles from '../styles/TrainingCard.module.css'; // assuming CSS module

export default function TrainingCard({ log }) {
    const date = new Date(log.date);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return (
        <div className={styles.card}>
            <div className={styles.dateBadge}>
                {/* <span className={styles.date}>{date}</span> */}
                {/* <span className={styles.date}>{date}</span> */}
                <span className={styles.date}>{monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}</span>
                {/* <span className={styles.date}>{log.date}</span> */}
                {/* <span className={styles.monthYear}>{log.monthYear}</span> */}
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{log.title}</h2>
                <div className={styles.details}>
                    <span>{log.ownerName} - {log.animalBreed} - {log.animalName}</span>
                    <span>{log.hours} hours</span>
                </div>
                <p className={styles.description}>{log.description}</p>
            </div>
            <div className={styles.editButton}>
                {/* Assuming you have an edit action or icon */}
                <button>Edit</button> 
            </div>
        </div>
    );
}