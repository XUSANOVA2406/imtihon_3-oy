import express from "express"
import {
  getAll,
  getOne,
  create,
  update,
  remove
} from "../controllers/branchController.js";

import checkToken from "../middlewares/checkToken.js";
import checkPermission from "../middlewares/checkPermission.js";
const router = express.Router()
router.get(
  "/",
  checkToken,
  checkPermission("branch:read"),
  getAll
)
router.get(
  "/:id",
  checkToken,
  checkPermission("branch:read"),
  getOne
)
router.post(
  "/",
  checkToken,
  checkPermission("branch:create"),
  create
)
router.put(
  "/:id",
  checkToken,
  checkPermission("branch:update"),
  update
)
router.delete(
  "/:id",
  checkToken,
  checkPermission("branch:delete"),
  remove
)
export default router
