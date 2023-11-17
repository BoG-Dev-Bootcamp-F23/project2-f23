import getUsers from "server/mongodb/actions/getUsers.js"
export default async function handler(req, res) {
    if(req.method === 'GET') {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;


            return res.status(200).json({ message: 'All users returned successfully' });
            
        } catch (error) {
            return res.status(500).json({error: 'There was an error'})
        }
    } else {
        return res.status(500).json({ error: 'Only GET method allowed' });
    }
}