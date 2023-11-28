import readTrainingLogs from '../../../../server/mongodb/actions/readTrainingLogs.js'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const trainingLogs = await readTrainingLogs()
            return res.status(200).json(trainingLogs)
        } catch (e) {
            return res.status(500).json({status: 'failure'})
        }
    }
    
}