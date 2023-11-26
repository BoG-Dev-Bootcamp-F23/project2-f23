import styles from '@/styles/Home.module.css'
import Login from './Login';
import AnimalCard from '@/components/AnimalCard';
import { useState, useEffect } from 'react';
import TrainingLogCard from '@/components/TrainingLogCard';






export default function TrainingLogs() {

    const [trainingCard, setTrainingCard] = useState()


    async function getTrainingData() {
        const rawData = await fetch("/api/admin/training")
        const data = rawData.json;
        setTrainingCard(data);
        return data;
    }



    return (
        <div className={styles.trainingCards}>
                {trainingCard?.map((card) => (
                    <TrainingLogCard {...card} />
                ))}
        </div>
    );









}
