import verifyUser from '../../../../server/mongodb/actions/verifyUser.js'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log("that point");
        try {
            const result =  await verifyUser(req.body)
            return res.status(200).json(result)
        } catch (e) {
            if (e.message.toString() === 'Error: User does not exist') {
                return res.status(400).json({ status: 'User does not exist'})
            } else if (e.message.toString() === 'Error: Incorrect password') {
                return res.status(400).json({ status: 'Incorrect password'})
            } else {
                return res.status(500).json({ status: 'Incorrect password' })
            }
        }
    }
}