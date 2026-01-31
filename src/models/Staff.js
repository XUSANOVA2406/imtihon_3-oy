import mongoose from "mongoose"
const staffSchema=new mongoose.Schema({
    branch:{ type:mongoose.Schema.Types.ObjectId, ref: "Branch", required:true},
    username:{ type:String, required: true, unique:true },
    password:{ type:String, required:true },
    birthDate:String,
    gender:{ type:String, enum: ["male", "female"]},
    role:{ type:String, enum: ["Admin", "SuperAdmin", "Staff"],default:"Staff" }
}, { timestamps:true });
export default mongoose.model('Staff', staffSchema);