import getTrainingLogs from "../../../../server/mongodb/actions/getTrainingLogs";


export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const trainingLogs = await getTrainingLogs();
            return res.status(200).send(trainingLogs);
        } catch (e) {
            return res.status(500).send("Unknown error occurred");
        }
    }
}