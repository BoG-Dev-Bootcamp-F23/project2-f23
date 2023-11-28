import AnimalCard from "./AnimalCard"

export default function AnimalList({ animals }) {
    return (
        <div>
            {animals.map(animal => (
                <AnimalCard animal={animal}/>
            ))}
        </div>
    );
}