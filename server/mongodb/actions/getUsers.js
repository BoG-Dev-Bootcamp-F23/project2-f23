import connectDB from "../index";
import User from "../models/User";

export default async function getUsers(data) {
    try {
        await connectDB();
    } catch (error) {
        return res.status(500).json({ error: 'Failed to connect to a database' });
        
    }
}