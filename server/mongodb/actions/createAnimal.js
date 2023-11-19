import { connectDB } from '../index.js';
import Animal from "../models/Animal.js"

export default async function createAnimal(name, breed, owner, hoursTrained, profilePictureUrl) {
    try {
      await connectDB();

      const newAnimal = new Animal({
        name,
        breed,
        owner,
        hoursTrained,
        profilePictureUrl, 
      });
  
      const createdAnimal = await newAnimal.save();
  
      return createdAnimal;
    } catch (error) {
      throw error; 
    }
  }