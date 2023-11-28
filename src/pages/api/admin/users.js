import readUsers from '../../../../server/mongodb/actions/readUsers.js' 

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const users = await readUsers();
            return res.status(200).json(users)
        } catch (e) {
            return res.status(500).json({status: 'failure'})
        }
    }
}