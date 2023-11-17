import connectDB from "../index.js";
import User from "../models/User.js";
export default async function createUser(data) {
    try {
        await connectDB();
        const User = new User(data);
        await User.save()
    } catch (e) {
        throw new Error("Unable to create user. Invalid data or database issue.")
    }
}