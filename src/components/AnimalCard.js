import react from 'react'
import styles from '..//styles/AnimalCard.module.css'
import { useState, useEffect } from 'react';

export default function AnimalCard() {


    return (
        <div className= {styles.animalCard}>
            <div className={styles.imageHolder}>
                <img src= "dog.jpg" className={styles.animalCardPhoto} alt="dog" />
            </div>
            <div className = {styles.animalCardInfo}>
                <div className={styles.circle}>
                <div className = {styles.logo}> L </div>
                </div>
                <div className= {styles.animalCardText} > 
                    <div className = {styles.nameDog}>
                        <p> Nathan - Golden Retriever </p>
                    </div>
                    <div className = {styles.trainerHours}>
                        <p> Liam Long • Trained 100 hours</p>
                    </div>
                </div>
            </div>
        </div>
    );




}