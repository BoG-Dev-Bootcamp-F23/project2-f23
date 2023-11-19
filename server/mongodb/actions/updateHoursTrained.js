import { connectDB } from '../index.js';
import Animal from "../models/Animal.js"

export default async function updateAnimalHoursTrained(animalId, hoursTrained) {
  try {
    await connectDB();

    const existingAnimal = await Animal.findById(animalId);

    if (!existingAnimal) {
      return { success: false, error: 'Animal not found' };
    }

    const updatedAnimal = await Animal.updateOne(
      { _id: animalId }, 
      { $inc: { hoursTrained } }
    ); 
    
    if (updatedAnimal) {
      return { success: true };
    } else {
      return { success: false, error: 'Update failed' };
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Internal Server Error' };
  }
};
