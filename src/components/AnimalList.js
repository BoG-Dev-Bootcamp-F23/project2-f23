import AnimalCard from "./AnimalCard"
import style from "../styles/AnimalList.module.css"

export default function AnimalList({ animals }) {
    return (
        <div className={style.animalListContainer}>
            {animals.map(animal => (
                <AnimalCard key={animal._id} animal={animal} />
            ))}
        </div>
    );
}