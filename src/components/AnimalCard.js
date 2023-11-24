import react from "react";
import dog from "../dog.jpg"
import styles from "src/styles/animalcard.module.css"






export default function AnimalCard() {


    return (


        <div class = "animal-card" className= {styles.animalCard}>
            <div> 
                <img id = "dog-image" src={dog} alt="dogimg"/>
            </div>
            <div className = {styles.animalCardInfo}>
                <div class = "logo">
                    
                </div>
                <div className= {styles.animalCardText} > 
                    <div className = {styles.nameDog}>
                        <p> Nathan - Golden Retriever </p>
                    </div>
                    <div className = {styles.trainerHours}>
                        <p> Liam Long </p>
                        <p> Trained 100 hours </p>
                    </div>
                </div>
            </div>
        </div>
    );




}