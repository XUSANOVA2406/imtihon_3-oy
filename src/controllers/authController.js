import Staff from "../models/Staff.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {registerValidation } from "../validations/auth.validation.js"

export const register=async(req,res)=>{
    try{
        const { error }=registerValidation(req.body);
        if (error) return res.status(400).json({message: error.details[0].message })
        const { username, password, branch, birthdate, gender, role } = req.body
        const hashedPassword = await bcrypt.hash(password, 12)
        const newStaff=await Staff.create({
            username,
            password: hashedPassword,
            branch,
            birthDate: birthdate,
            gender,
            role
        })
        const token = jwt.sign({ id: newStaff._id }, process.env.JWT_SECRET,{ expiresIn:'1d'})
        res.status(201).json({
            status: "success",
            token,
            data: newStaff
        })
    }catch(err) {
        res.status(400).json({message: err.message})
    }
}

export const login=async(req,res)=>{
    try{
        const { username, password } = req.body
        const staff=await Staff.findOne({ username });
        if(!staff) {
            return res.status(404).json({ message:"Bunday foydalanuvchi topilmadi"})
        }
        const isMatch=  await bcrypt.compare(password, staff.password)
        if (!isMatch) {
            return res.status(400).json({ message:"Parol xato" });
        }
        const token=jwt.sign(
            { id: staff._id, role: staff.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        )
        res.json({
            status:"success",
            token,
            role: staff.role
        });
    }catch(err) {
        res.status(500).json({ message:err.message })
    }
}