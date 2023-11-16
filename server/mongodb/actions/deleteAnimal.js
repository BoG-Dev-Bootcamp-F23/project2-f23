import connectDB from "../index.js"
import Animal from "../models/Animal.js"

export default async function deleteAnimal(data) {
    try {
        await connectDB()
        const identifier = data
        return await Animal.findByIdAndDelete(identifier)
    } catch (e) {
        console.log(e)
        return false;
    }
}