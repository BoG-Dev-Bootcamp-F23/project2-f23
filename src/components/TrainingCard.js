import React, { useState, useEffect } from 'react';

export default function TrainingCard({ log }) {

    return (
        <div>
            <div className = "date">
                <p> {log.date} </p>
            </div>
            <div className = "information">
                <p> {log.title} </p>
                <p> {log.hours}</p>
                <p> {log.user}</p>
                <p> {log.animal}</p>
                <p> {log.description}</p>
            </div>
        </div>
    );
}
