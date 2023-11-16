import mongoose from "mongoose";
import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function deleteTrainingLog(data) {
    try {
        await connectDB();
        const { identifier } = data;
        const log = await TrainingLog.findByIdAndDelete(identifier).projection(incl);
        if (!log) {
            throw new Error("Log not found");
        }
    } catch (e) {
        if (e.message === "Log not found") {
            throw new Error("Log not found");
        } else {
            console.log(e);
            throw new Error("Could not delete new training log");
        }
    }

}

