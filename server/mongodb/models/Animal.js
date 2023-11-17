import mongoose from "mongoose"

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      breed: {
        type: String,
        required: true,
      },
      owner: {
        type: String,
        required: true,
      },
      hoursTrained: {
        type: Number,
        default: 0,
      },
      profilePictureUrl: {
        type: String,
      },
})

export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema)