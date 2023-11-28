import connectDB from '../index.js'
import TrainingLog from '../models/TrainingLog.js'

export default async function readTrainingLogs() {
    try {
        await connectDB()
        return await TrainingLog.find({})
    } catch (e) {
        console.log(e)
        return false
    }
}