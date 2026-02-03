import {Router} from "express"
import {getAllAdmins, deleteStaff } from "../controllers/adminController.js"
import {checkToken} from "../middlewares/auth.js"
import {roleGuard } from "../middlewares/roleCheck.js"

const router=Router()
router.get('/',checkToken, roleGuard("SuperAdmin"), getAllAdmins)
router.delete('/:id', checkToken, roleGuard("SuperAdmin"), deleteStaff)

export default router