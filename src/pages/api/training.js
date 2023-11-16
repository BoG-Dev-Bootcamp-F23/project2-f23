import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog";
import deleteTrainingLog from "../../../server/mongodb/actions/deleteTrainingLog";
import getTrainingLogs from "../../../server/mongodb/actions/getTrainingLogs";
import updateTrainingLog from "../../../server/mongodb/actions/updateTrainingLog";

export default async function handler(req, res) {

    if (req.method === "POST") {
        try {
            await createTrainingLog(req.body);
            return res.status(200).send("Successfully created log");
        } catch (e) {
            return res.status(500).send("Unknown error occurred");
        }
    } else if (req.method === "GET") {
        
        try {
            const trainingLogs = await getTrainingLogs();
            return res.status(200).send(trainingLogs);
        } catch (e) {
            return res.status(500).send("Unknown error occurred");
        }

    } else if (req.method === "PATCH") {
        try {
            const updatedTrainingLog = await updateTrainingLog(req.body);
            return res.status(200).send(updatedTrainingLog);
        } catch (e) {
            if (e.message === "Invalid Error") {
                return res.status(400).send("Could not find training log");
            }
            return res.status(500).send("Unknown error occurred");
        }
    } else if (req.method === "DELETE") {
        try {
            await deleteTrainingLog(req.query);
            return res.status(200).send("Deleted training log");
        } catch (e) {
            if (e.message === "Log not found") {
                return res.status(400).send(e.message);
            }
            return res.status(500).send("Unknown error occurred");
        }
    }
}
