import connectDB from "../index.js"
import TrainingLog from "../models/TrainingLog.js"
import updateAnimal from "./updateAnimal.js";

export default async function updateTrainingLog(data) {
    try {
        await connectDB();
        const oldTrainingLog = await TrainingLog.findById(data.trainingLogID);
        const oldHours = oldTrainingLog.hours;
        const updatedTrainingLog = await TrainingLog.findByIdAndUpdate(
            data.trainingLogID, { "hours": data.newHours }, { new: true }
        );
        if (updatedTrainingLog === null) {
            throw new Error("Training Log Not Found");
        }

        const difference = data.newHours - oldHours;
        await updateAnimal({ "animalID": updatedTrainingLog.animal, "addValue": difference })

        return updatedTrainingLog;
    } catch (e) {
        throw new Error(e);
    }
}