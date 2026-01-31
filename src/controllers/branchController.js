import Branch from "../models/Branch.js"

export const createBranch=async(req,res)=>{
    try{
        const {name,time,address }=req.body;
        const newBranch=await Branch.create({name,time,address})
        res.status(201).json({
            status: "success",
            data: newBranch
        })
    } catch(err){
        res.status(400).json({status: "error", message: err.message })
    }
}