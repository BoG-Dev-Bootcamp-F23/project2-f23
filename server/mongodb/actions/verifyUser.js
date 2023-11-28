import connectDB from "../index.js";
import User from "../models/User.js";
import mongoose from "mongoose";

export default async function verifyUser(data) {
    try {
        await connectDB();
        return User.find({email: data.email, password: data.password});
    } catch (e) {
        console.log(e);
        throw new Error("Unable to verify user. Invalid data or database issue.");
    }
}