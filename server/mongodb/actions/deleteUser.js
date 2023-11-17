import connectDB from "../index.js"
import User from "../models/User.js"

export default async function deleteUser(data) {
    try {
        await connectDB();
        const identifier = data;
        return await User.findByIdAndDelete(identifier);
    } catch (e) {
        console.log(e);
        return false;
    }
}