import express from "express"
import {
  getAll,
  create,
  update,
  remove
} from "../controllers/transportController.js"
import checkToken from "../middlewares/checkToken.js"
import checkPermission from "../middlewares/checkPermission.js"

const router = express.Router()
router.get(
  "/",
  checkToken,
  checkPermission("transport:read"),
  getAll
)
router.post(
  "/",
  checkToken,
  checkPermission("transport:create"),
  create
)
router.put(
  "/:id",
  checkToken,
  checkPermission("transport:update"),
  update
)
router.delete(
  "/:id",
  checkToken,
  checkPermission("transport:delete"),
  remove
)
export default router
