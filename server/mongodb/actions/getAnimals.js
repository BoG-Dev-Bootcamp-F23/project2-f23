import connectDB from "../index.js";
import Animal from "../models/Animal";

export default async function getAnimals(data) {

    try {
        await connectDB(); 
        return await Animal.find();
    } catch (e) {
        console.log(e);
        throw new Error("Unable to get Animals. Invalid data or database issue.");
    }
    
}