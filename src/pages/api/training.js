import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog";
import getTrainingLogs from "../../../server/mongodb/actions/getTrainingLogs";
import updateTrainingLog from "../../../server/mongodb/actions/updateTrainingLog";




export default async function handler(req, res) {

    if (req.method === "POST") {
        try {
            await createTrainingLog(req.body);
        } catch (e) {
            
        }


    } else if (req.method === "GET") {


    } else if (req.method === "PATCH") {




    }






}