import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function updateTrainingLog(data) {
    try {
        await connectDB();
        const { trainingId } = data;
        await Ticket.findByIdAndUpdate(ticketId, data);
    } catch (e) {
        console.log(e);
        throw new Error("Unable to update training log. Invalid data or database issue.");
    }
}