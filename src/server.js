import app from "./app.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const PORT= process.env.PORT || 1212

mongoose 
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB connected")
        app.listen(PORT,()=>{
            console.log("Server running...")
        })
    })
    .catch((err)=>{
        console.log("Mongo error:", err.message)
    })