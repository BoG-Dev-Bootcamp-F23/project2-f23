import connectDB from "../index";
import Animal from "../models/Animal";

export default async function createAnimal(data) {
    try {
        await connectDB()
        const animal = new Animal(data)
        await animal.save()
        return true;
    } catch (e) {
        console.log(e)
        throw new Error("Unable to create animal. Invalid data or database issue.")
    }

}