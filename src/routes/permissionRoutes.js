import express from "express"
import { addPermission } from "../controllers/permissionController.js"
import checkToken from "../middlewares/checkToken.js"
import roleGuard from "../middlewares/roleGuard.js"
const router = express.Router()
router.post("/add",checkToken,roleGuard("permission:manage"),addPermission)
export default router