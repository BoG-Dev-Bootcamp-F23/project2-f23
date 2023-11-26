import React from "react";
import styles from '..//styles/TrainingLogCard.module.css'



export default function TrainingLogCard(props) {


    return (
        <div className = {styles.mainCard}>
            <div className= {styles.date}>
                <h1> 20 </h1>
                <p> Oct - 2023 </p>
            </div>
            <div className = {styles.trainingInfo}>
                <div className = {styles.cardTitle}>
                    <h1> Complete Sit Lessons</h1>
                    <p className={styles.hours}> • 20 Hours </p>
                </div>
                <div className = {styles.dogInfo}>
                    Liam Long • Golden Retriever • Lucy
                </div>
                <div className = {styles.trainingDescription}>
                    Lucy did very well in her sit lessons today.
                </div>
            </div>
            <div className = {styles.editButton}>
                <p className= {styles.letter}> Edit</p>
            </div>
        </div>
    );
}