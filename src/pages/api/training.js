import mongoose from "mongoose";
import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog";
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
            await createTrainingLog({user: userId, animal: animalId, title, date: dateConverted, description, hours});
            return res.status(200).send("Succesfully created training log!");
        } catch (e) {
            return res.status(500).send("Failed to create training log!")
        }
    } else if (req.method === "PATCH") {

    } else if (req.method === "GET") {

    }
}