import styles from '@/styles/Home.module.css';
import Login from './Login';
import AnimalCard from '@/components/AnimalCard';
import { useState, useEffect } from 'react';
import TrainingLogCard from '@/components/TrainingLogCard';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import EditTrainingLog from '@/components/EditTrainingLog';
import EditAnimalCard from '@/components/EditAnimalCard';

export default function Home() {
  const [training, setTraining] = useState(true);
  const [animalCards, setAnimalCards] = useState([]);
  const [trainingCard, setTrainingCard] = useState([]);

  async function getTrainingData() {
    try {
      const rawData = await fetch('http://localhost:3000/api/admin/training');
      const data = await rawData.json();
      setTrainingCard(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log('error happened:' + error);
    }
  }

  async function getAnimalData() {
    try {
      const rawData = await fetch('http://localhost:3000/api/admin/animals');
      const data = await rawData.json();
      setAnimalCards(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log('error happened:' + error);
    }
  }

  useEffect(() => {
    if (training) {
      getTrainingData();
    } else {
      getAnimalData();
    }
  }, [training]);

  console.log(trainingCard);

  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <Sidebar />
        <div className={styles.contentContainer}>
          {training ? (
            <div className={styles.trainingCardsContainer}>
              {trainingCard?.map((card) => (
                <TrainingLogCard {...card} key={card._id} />
              ))}
            </div>
          ) : (
            <div className={styles.animalCardsContainer}>
              {animalCards?.map((card) => (
                <AnimalCard {...card} key={card._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}


          {/* {training ? (
            <div className={styles.trainingCardsContainer}>
              {trainingCard?.map((card) => (
                <TrainingLogCard {...card} key={card._id} />
              ))}
            </div>
          ) : (
            <div className={styles.animalCardsContainer}>
              {animalCards?.map((card) => (
                <AnimalCard {...card} key={card._id} />
              ))}
            </div>
          )} */}