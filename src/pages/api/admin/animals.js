import readAnimals from '../../../../server/mongodb/actions/readAnimals.js'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const animals = await readAnimals()
            return res.status(200).json(animals)
        } catch (e) {
            return res.status(500).json({status: 'failure'})
        }
    }
}