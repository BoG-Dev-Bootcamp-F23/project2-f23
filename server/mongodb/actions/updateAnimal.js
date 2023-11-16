import connectDB from "../index";
import Animal from "../models/Animal";

export default async function updateAnimal(data) {
    try {
        await connectDB()
        const { hoursTrained, animalId  } = data;
        const existAnimal = await Animal.findOne({_id : animalId});
        return (!existAnimal ? null : Animal.findByIdAndUpdate(animalId, { hoursTrained: hoursTrained }));
    } catch (e) {
        console.log(e)
        return false;
    }

}