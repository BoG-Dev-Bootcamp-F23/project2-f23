import deleteUser from "../../../server/mongodb/actions/deleteUser";
import createUser from "../../../server/mongodb/actions/createUser";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createUser(req.body);
        } catch {
            return res.status(500).send("Invalid data.");
        }
        return res.status(200).send("Success");
    }
    if (req.method === "DELETE") {
        try {
            await deleteUser(req.query);
        } catch {
            res.status(500).send("Invalid data.");
        }
        return res.status(200).send("Success");
    }
    return res.status(400).send("Cannot make a request of this type.");
}