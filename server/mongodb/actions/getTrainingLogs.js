import mongoose from "mongoose";
import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function getTrainingLogs() {
    try {
        await connectDB();
        const trainingLogs = await TrainingLog.find();
        return trainingLogs;
    } catch (e) {
        console.log(e);
        throw new Error("Could not create new training log");
    }

}