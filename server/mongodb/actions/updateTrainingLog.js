import mongoose from "mongoose";
import TrainingLog from "../models/TrainingLog";
import connectDB from ".."; 



export default async function updateTrainingLog(data) {
    try {
        await connectDB();
        const { id } = data;
        const newTrainingLog = TrainingLog.findByIdAndUpdate(id, {
            _id: data._id,
            user: data.user,
            animal: data.animal,
            title: data.title,
            date: data.date,
            description: data.description, 
            hours: data.hours

        });
        if (!newTrainingLog) {
            throw new InvalidInformationError();
        }
    } catch(e) {
        if (e.message === "Invalid Error") {
            throw new InvalidInformationError();
        }
        console.log(e);
        throw new Error("Could not update log");
    }

}


class InvalidInformationError extends Error {
    constructor(message = "Invalid Error") {
        super(message);
        this.name = "Invalid Error";
    }
}

export { InvalidInformationError };