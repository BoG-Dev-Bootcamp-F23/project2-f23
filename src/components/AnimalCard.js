import React, { useState, useEffect } from 'react';

export default function AnimalCard({ animal }) {

    return (
        <div>
            <div className = "picture">
                <img src={animal.profilePicture}/>
            </div>
            <div className = "information">
                <div className = "icon">
                    <p> {animal.name[0]}</p>
                </div>
                <p> {animal.name} - {animal.breed}</p>
                <p> {animal.owner}</p>
                <p> Trained: {animal.hoursTrained}</p>
            </div>
        </div>
    );
}
