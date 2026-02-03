import express from "express"
import { addPermission } from "../controllers/permissionController.js"
import checkToken from "../middlewares/checkToken.js"
import checkPermission from "../middlewares/checkPermission.js"
const router = express.Router()
router.post(
  "/add",
  checkToken,
  checkPermission("permission:manage"),
  addPermission
)
export default router