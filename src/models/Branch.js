import mongoose from "mongoose"
const branchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    time: String,
    address: String
  },
  { timestamps: true }
)
export default mongoose.model("Branch", branchSchema)