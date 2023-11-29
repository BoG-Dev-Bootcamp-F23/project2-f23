import AnimalCard from "./AnimalCard"
import style from "../styles/AnimalList.module.css"

export default function AnimalList({ animals, users }) {
    return (
        <div className={style.animalListContainer}>
            {animals.map(animal => (
                <AnimalCard animal={animal} users={users}/>
            ))}
        </div>
    );
}