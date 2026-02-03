import express from "express"
import branchRouter from "./routes/branchRoutes.js"
import authRouter from "./routes/authRoutes.js" 
import transportRouter from "./routes/transportRoutes.js"
import adminRouter from "./routes/adminRoutes.js"
import path from "path" 
import errorHandler from "./middlewares/errorHandler.js"
import permissionRouter from "./routes/permissionRoutes.js"
const app = express()
app.use(express.json()) 
app.use("/api/v1/branches", branchRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/transports", transportRouter)
app.use("/img", express.static(path.join(process.cwd(), "img")))
app.use("/api/v1/admins", adminRouter)
app.use(errorHandler)
app.use("/api/v1/permissions", permissionRouter)
app.get("/", (req, res)=>{
    res.send("Working...")
})

export default app
