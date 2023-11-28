import React from 'react'
import styles from '..//styles/AnimalCard.module.css'
import { useState, useEffect } from 'react';
import connectDB from "../../server/mongodb";
import User from "../../server/mongodb/models/User";
import { Connection } from 'mongoose';



export default function AnimalCard(props) {
    const {name, breed, owner, hoursTrained, profilePicture} = props;

    const [realUser, setUser] = useState("");


    async function getUser() {
        const rawData = await fetch("http://localhost:3000/api/admin/training")
        const userData = rawData.json();
        const uniqueNamesSet = new Set(userData.filter((user) => {
            user._id == owner;
        }
        ));
        setUser(uniqueNamesSet.entries[0]);
      }
    
      useEffect(() => {
        getUser();
      }, [owner]);



    return (
        <div className= {styles.animalCard}>
            <img src= {profilePicture} className={styles.animalCardPhoto} alt="dog" />
            <div className = {styles.animalCardInfo}>
                <div className={styles.circle}>
                <div className = {styles.logo}> {realUser.substring(0, 1)} </div>
                </div>
                <div className= {styles.animalCardText} > 
                    <div className = {styles.nameDog}>
                        <p> {name} - {breed} </p>
                    </div>
                    <div className = {styles.trainerHours}>
                        <p> {realUser ? `${realUser} • Trained ${hoursTrained} hours` : 'Loading...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );




}