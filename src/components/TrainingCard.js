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
import { useAuth } from "../contexts/useAuth";
import Image from "next/image";
import PencilSolid from "../images/pencil-solid.png"

export default function TrainingCard({ log }) {

    console.log("TrainingCar");
    console.log(log);

    const {users, animals, setEditLog, setDisplay} = useAuth();

    const user = users?.filter(user => user._id === log.user)[0];
    const animal = animals?.filter(animal => animal._id === log.animal)[0];

    const date = new Date(log.date);
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return (
        <div className={styles.card}>
            <div className={styles.dateBadge}>
                {/* <span className={styles.date}>{date}</span> */}
                {/* <span className={styles.date}>{date}</span> */}
                <span className={styles.date}>{date.getDate()}</span>
                <span className={styles.monthYear}>{monthNames[date.getMonth()]} - {date.getFullYear()}</span>
                {/* <span className={styles.date}>{log.date}</span> */}
                {/* <span className={styles.monthYear}>{log.monthYear}</span> */}
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{log.title}                    
                    <span className={styles.hours}> • {log.hours} hours</span>
                </h2>
                <div className={styles.details}>
                    <span>{user?.fullName} - {animal?.breed} - {animal?.name}</span>
                </div>
                <p className={styles.description}>{log.description}</p>
            </div>
            <div className={styles.editButton}>
                {/* Assuming you have an edit action or icon */}
                <button onClick = {() => {
                    setEditLog(log);
                    setDisplay(7);
                }}><Image className={styles.editImage} src={PencilSolid} alt="edit" /></button> 
            </div>
        </div>
    );
}