import { connectDB } from '../index.js';
import Animal from "../models/Animal.js"

export const updateAnimalHoursTrained = async (animalId, hoursTrained) => {
    try {
      const { Animal } = await connectDB();
      await Animal.updateOne({ _id: animalId }, { $inc: { hoursTrained } });
  
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: 'Internal Server Error' };
    }
  };