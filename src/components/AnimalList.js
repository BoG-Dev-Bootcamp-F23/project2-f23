import AnimalCard from "./AnimalCard"

export default function AnimalList({ animals, users }) {
    return (
        <div>
            {animals.map(animal => (
                <AnimalCard animal={animal} users={users}/>
            ))}
        </div>
    );
}