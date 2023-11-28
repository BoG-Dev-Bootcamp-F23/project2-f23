import deleteTrainingLog from "../../../server/mongodb/actions/deleteTrainingLog.js";
import updateTrainingLog from "../../../server/mongodb/actions/updateTrainingLog.js";
import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog.js";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const response = await updateTrainingLog(req.body);
            // console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: Training Log Not Found") {
                return res.status(400).json({"status": "Training Log Not Found"});
            }
            else return res.status(500).json({"status": "Failed to update training log due to database issues."});
        }
    } else if (req.method === 'DELETE') {
        try {
            const response = await deleteTrainingLog(req.query);
            // console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: Training Log Not Found") {
                return res.status(400).json({"status": "Training Log Not Found"});
            }
            else return res.status(500).json({"status": "Failed to delete training log due to database issues."});
        }
    } else if (req.method === 'POST') {
        try {
            console.log(req.body)
            const response = await createTrainingLog(req.body);
            console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: Animal Not Found") {
                return res.status(400).json({"status": "Animal Not Found"});
            }
            else if (e.message.toString() === "Error: User Not Found") {
                return res.status(400).json({"status": "User Not Found"});
            }
            else if (e.message.toString() === "Error: Animal's user does not match passed in user") {
                return res.status(400).json({"status": "Animal's user does not match passed in user"});
            }
            else return res.status(500).json({"status": "Failed to create training log due to database issues."});
        }
    }
}
