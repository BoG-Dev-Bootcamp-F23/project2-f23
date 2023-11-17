import createAnimal from '../../../actions/createAnimal';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, breed, owner, hoursTrained, profilePictureUrl } = req.body;

      const { success, animalId, error } = await createAnimal({
        name,
        breed,
        owner,
        hoursTrained,
        profilePictureUrl,
      });

      if (success) {
        res.status(200).json({ message: 'Animal created successfully', animalId });
      } else {
        res.status(500).json({ message: error });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }
}
