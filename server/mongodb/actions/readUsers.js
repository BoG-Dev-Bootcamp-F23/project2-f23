import connectDB from '../index.js'
import User from '../models/User.js'

export default async function readUsers() {
    try {
        await connectDB()
        return await User.find({})
    } catch (e) {
        console.log(e)
        return false
    }
}