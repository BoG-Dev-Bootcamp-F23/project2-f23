import react from 'react'
import styles from '..//styles/AnimalCard.module.css'

export default function AnimalCard() {


    return (
        <div class = "animal-card" className= {styles.animalCard}>
            <img src="dog.jpg" className={styles.animalCardPhoto} alt="dog" />
            <div className = {styles.animalCardInfo}>
                <div class = "logo">
                    
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