import connectDB from "../index.js";
import User from "../models/User.js";

export default async function getUsers() {
    try {
        await connectDB();
        const users = await User.find();
        return users;
    } catch (e) {
        console.log(e);
        throw new Error("Unable to create user. Invalid data or database issue.");
    }
}