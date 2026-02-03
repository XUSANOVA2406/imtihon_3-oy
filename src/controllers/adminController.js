import Staff from "../models/Staff.js"
export const getAllAdmins = async (req, res) => {
    try{
        const admins=await Staff.find().populate("branch")
        res.json({ status: "success", data: admins })
    }catch(err) {
        res.status(400).json({ message: err.message })
    }
}
export const deleteStaff=async(req,res)=>{
    try{
        await Staff.findByIdAndDelete(req.params.id);
        res.json({ status: "success", message: "Xodim o'chirildi" })
    }catch (err) {
        res.status(400).json({ message: err.message })
    }
}