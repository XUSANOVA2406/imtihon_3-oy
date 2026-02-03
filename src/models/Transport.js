import mongoose from "mongoose"
const transportSchema = new mongoose.Schema(
  {
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true
    },
    model: { type: String, required: true },
    color: String,
    img: String,
    price: Number,
    time: String
  },
  { timestamps: true }
)
export default mongoose.model("Transport", transportSchema)