import express from "express"
import branchRouter from "./routes/branchRoutes.js"
import authRouter from "./routes/authRoutes.js" 

const app = express()

app.use(express.json()) 
app.use("/api/v1/branches", branchRouter)
app.use("/api/v1/auth", authRouter)
app.get("/", (req, res)=>{
    res.send("Working...")
})

export default app