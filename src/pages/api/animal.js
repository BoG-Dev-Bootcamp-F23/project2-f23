import createAnimal from '../../../server/mongodb/actions/createAnimal';
import updateAnimal from '../../../server/mongodb/actions/updateAnimal';
import deleteAnimal from '../../../server/mongodb/actions/deleteAnimal';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const result = await createAnimal(req.body);
            return (result === null ? res.status(400).send("Unable to create animal. Invalid data or database issue.") : res.status(200).send("Success")) 
        } catch (e) {
            return res.status(500).send("Failed")
        }
    } 

    if (req.method == 'PATCH') {
        try {
            const result = await updateAnimal(req.body);
            return (result === null ? res.status(400).send("Animal Not Found") : res.status(200).send("Success")) 
        } catch (e) {
            return res.status(500).send("Failed")
        }      
    }

    if (req.method === "DELETE") {
        try {
            const validAnimal = await deleteAnimal(req.query.animalId);
            return (validAnimal === null ? res.status(400).send("Animal Not Found") : res.status(200).send("Success")) 
        } catch(e) {
            return res.status(500).send("Failed");
        }
    }
}