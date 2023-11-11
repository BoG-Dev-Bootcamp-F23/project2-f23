import connectDB from "../index.js";
import TrainingLog from "../models/TrainingLog.js";
import {ServerError, UserError} from "../../utils/errors.js";
import User from "../models/User.js";
import Animal from "../models/Animal.js";
export default async function createTrainingLog(log) {
        try {
                connectDB();
        }catch (e) {
                console.log(e);
                throw new ServerError("Failed to connect to Database.");
        }
        //Check and ensure that the user and animal exist in the database, as well as ensure the animal is the users animal.




        const {user, animal} = log;
        if (user === undefined || animal === undefined) {
                throw new UserError("No user or animal identifier passed into the data.");
        }
        //Check here if the animal exists or not
        potentialAnimal = await Animal.findById(animal);
        if (potentialAnimal === null) {
                throw new UserError("Animal specified in training log doesn't exist.");
        }

        potentialOwner = await User.findById(user);
        //Check here if potentialOwner is null, if it is throw an error
        if (potentialOwner === null) {
                throw new UserError("User specified does not exist.");
        }
        if (potentialOwner.id !== animal.owner) { //Is this how I access the object ID
                throw new UserError("Specified user does not own this ;animal.");

        }
        trainingLog = new TrainingLog(log);
        await trainingLog.save();

        //Check and ensure that the animal is the users.
        
    

}