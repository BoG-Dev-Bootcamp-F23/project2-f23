import getUsers from "../../../../server/mongodb/actions/getUsers";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const users = await getUsers();
            return res.status(200).json(users);
        } catch {
            return res.status(500).send("Invalid data.");
        }
    }
    return res.status(400).send("Cannot make a request of this type.");
}