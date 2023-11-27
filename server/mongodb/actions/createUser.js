import connectDB from '../index.js'
import User from '../models/User.js'


export default async function createUser(data) {
    try {
        await connectDB()
        const existingUser = await User.findOne({ email: data.email });
        console.log(existingUser)
        if (existingUser) {
            throw new Error("User exists already")
        }
        const newUser = new User(data)
        await newUser.save()
        return newUser
    } catch (e) {
        throw new Error(e)
    }
}