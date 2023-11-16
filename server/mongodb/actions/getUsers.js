import connectDB from "../index.js";
import User from "../models/User.js";

export default async function getUsers() {
    try {
        await connectDB();
        const users = await User.find().select({_id: 1, fullName: 1, email: 1, admin: 1});
        return users;
    } catch (e) {
        console.log(e);
        throw new Error("Unable to create user. Invalid data or database issue.");
    }
}