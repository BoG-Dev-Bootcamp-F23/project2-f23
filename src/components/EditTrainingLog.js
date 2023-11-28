import React from "react";
import styles from '..//styles/EditTrainingLog.module.css';



export default function EditTrainingLog() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Training Logs</h3>
            <div className={styles.mainBody}>
                <div className={styles.titleInput}>
                    <h4>Title</h4>
                    <input type="text" placeholder="Title" />
                </div>
                <div className={styles.animalSelect}>
                    <h4>Select Animal</h4>
                    <select>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                    </select>
                </div>
                <div className={styles.hoursTrainedInput}>
                    <h4>Total Hours Trained</h4>
                    <input type="number" placeholder="20" />
                </div>
                <div className={styles.dateInput}>
                    <div className={styles.monthBox}>
                        <h4>Month</h4>
                        <input type="text" placeholder="July" />
                    </div>
                    <div className={styles.dateBox}>
                        <h4>Date</h4>
                        <input type="number" placeholder="20" />
                    </div>
                    <div className={styles.yearBox}>
                        <h4>Year</h4>
                        <input type="number" placeholder="2023" />
                    </div>
                </div>
                <div className={styles.noteInput}>
                    <h4>Notes</h4>
                    <input type="text" placeholder="Notes" />
                </div>
                <div className={styles.buttonBar}>
                    <button className={styles.cancelButton}>Cancel</button>
                    <button className={styles.saveButton}>Save</button>
                </div>
            </div>
        </div>
    );
}
