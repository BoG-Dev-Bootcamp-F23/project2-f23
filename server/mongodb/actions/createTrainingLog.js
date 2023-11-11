import mongoose from "mongoose";
import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function createTrainingLog(data) {
    try {
        await connectDB();
        const trainingLogSchema = new TrainingLog(data);
        await trainingLogSchema.save(); 

    } catch (e) {
        console.log(e);
        throw new Error("Could not create new training log");
    }




}

