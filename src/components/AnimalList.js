import AnimalCard from "./AnimalCard"
import style from "../styles/AnimalList.module.css"
import React, { useState, useEffect } from 'react';

const limitPerPage = 9;

export default function AnimalList({ animals, pagination }) {
    const [seg, setSeg] = useState(1);
    const totalPages = Math.floor((animals.length - 1) / limitPerPage) + 1;
    const [pagAnimals, setPagAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch_pag = async () => {
            const response = await fetch(`/api/admin/animals?page=${seg}&limit=${limitPerPage}`);
            const data = await response.json();
            // console.log(data);
            setPagAnimals(data);
            return data;
        }

        setLoading(true);
        fetch_pag();
        setLoading(false);
    }, [seg]);

    return (
        <div>
        {
            pagination?(
                <div>
                    <div className={style.animalListContainer}>
                        {
                            pagAnimals?.map(animal => (
                                <AnimalCard key={animal._id} animal={animal} />
                            ))
                        }
                    </div>
                    <div className={style.buttons}>
                        <button className={style.button} onClick={() => {
                            if (seg > 1) setSeg(seg - 1);
                        }}>&larr;</button>
                        <p>{seg}</p>
                        <button className={style.button} onClick={() => {
                            if (seg < totalPages) setSeg(seg + 1);
                        }}>&rarr;</button>
                    </div>
                </div>
            ):(
                <div className={style.animalListContainer}>
                    {animals.map(animal => (
                        <AnimalCard key={animal._id} animal={animal} />
                    ))}
                </div>
            )
        }
        </div>
    );
}