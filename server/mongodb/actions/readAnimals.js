import connectDB from '../index.js'
import Animal from '../models/Animal.js'

export default async function readAnimals() {
    try {
        await connectDB()
        return await Animal.find({})
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}