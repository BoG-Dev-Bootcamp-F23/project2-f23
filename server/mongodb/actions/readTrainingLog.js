import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function readTrainingLog(data) {
    try {
        await connectDB();
        return await TrainingLog.find();
    } catch (e) {
        console.log(e);
        throw new Error("Unable to read training log. Invalid data or database issue.");
    }
}