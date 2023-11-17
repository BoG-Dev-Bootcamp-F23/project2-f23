import connectDB from "../index.js";
import TrainingLog from "../models/TrainingLog.js";

export default async function createTrainingLog(data) {
    try {
        await connectDB();
        const newTrainingLog = new TrainingLog(data);
        await newTrainingLog.save()
    } catch (e) {
        throw new Error("Unable to create training log. Invalid data or database issue.")
    }
}