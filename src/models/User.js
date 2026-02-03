import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
    birthdate: Date,
    gender: String,
    role: {
      type: String,
      enum: ["SuperAdmin", "Admin", "Staff"],
      default: "Staff"
    },
    permissions: [String]
  },
  { timestamps: true }
)
export default mongoose.model("User", userSchema)