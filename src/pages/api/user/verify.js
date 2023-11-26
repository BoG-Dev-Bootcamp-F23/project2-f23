import verifyUser from '../../../../server/mongodb/actions/verifyUser.js'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const result =  await verifyUser(req.body)
            return res.status(200).json(result)
        } catch (e) {
            if (e.message.toString() === 'Error: User does not exist') {
                return res.status(500).json({ status: 'User does not exist'})
            } else {
                return res.status(500).json({ status: 'Incorrect password' })
            }
        }
    }
}