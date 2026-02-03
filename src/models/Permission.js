import mongoose from "mongoose"
const permissionSchema = new mongoose.Schema({
  role: String,
  permissions: [String]
})
export default mongoose.model("Permission", permissionSchema)