import mongoose from "mongoose";
import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog";
import updateTrainingLog from "../../../server/mongodb/actions/updateTrainingLog";
import User from "../../../server/mongodb/models/User";
import Animal from "../../../server/mongodb/models/Animal";
import TrainingLog from "../../../server/mongodb/models/TrainingLog";
import readTrainingLog from "../../../server/mongodb/actions/readTrainingLog";
import updateAnimalHoursTrained from "../../../server/mongodb/actions/updateHoursTrained";
//other CRUD actions from server



export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            if (!req.body) {
                return res.status(400).send("Insufficient information");
            }

            const { user, animal, title, date, description, hours } = req.body;

            const userId = new mongoose.Types.ObjectId(user); //convert the user id from 'String' to ObjectId, since it is defined as such in schema
            const animalId = new mongoose.Types.ObjectId(animal);
            const dateConverted = new Date(date); //'date' string must be in format "<YYYY-mm-dd>"
            await createTrainingLog({user: userId, animal: animalId, title, date: dateConverted, description, hours})
            await updateAnimalHoursTrained(animalId, hours);

            return res.status(200).send("Succesfully created training log!");
        } catch (e) {
            return res.status(500).send("Failed to create training log!")
        }
    } else if (req.method === "PATCH") {
        try {
            const { trainingId, userId, animalId } = req.body;
            const trainingExists = await TrainingLog.findById(trainingId);
            const userExists = await User.findById(userId);
            const animalExists = await Animal.findById(animalId);
            if (!(trainingExists && userExists && animalExists)) {
                return res.status(400).send("Incorrect information");
            }
            await updateTrainingLog(req.body);
            return res.status(200).send("Successfully updated training log!");
        } catch (e) {
            return res.status(500).send("Failed to update training log!");
        }
    } else if (req.method === "GET") {
        try {
            const result = await readTrainingLog(req.query);
            return res.status(200).send(result);
        } catch (e) {
            return res.status(500).send("Failed to retrieve training logs");
        }
    }
}