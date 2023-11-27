import styles from '@/styles/Home.module.css'
import Login from './Login';
import AnimalCard from '@/components/AnimalCard';
import { useState, useEffect } from 'react';
import TrainingLogCard from '@/components/TrainingLogCard';






export default function TrainingLogs() {

    const [trainingCard, setTrainingCard] = useState();

    async function getTrainingData() {
        try {
            const rawData = await fetch("http://localhost:3000/api/admin/training")
            const data = await rawData.json();
            setTrainingCard(data);
            console.log(data);
            return data;
        } catch (error) {
            console.log("error happenend:" + error);
        }
    }


    useEffect(() => {
        getTrainingData();
    }, []);

    console.log(trainingCard)


    return (
        <div className={styles.trainingCards}>
                {trainingCard?.map((card) => (
                    <TrainingLogCard {...card} />
                ))}
        </div>
    );

}
