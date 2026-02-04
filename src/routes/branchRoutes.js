import express from "express"
import {getAll,getOne,create,update,remove} from "../controllers/branchController.js"

import checkToken from "../middlewares/checkToken.js"
import roleGuard from "../middlewares/roleGuard.js"
const router = express.Router()
router
  .get("/",checkToken,roleGuard("branch:read"),getAll)
  .get("/:id",checkToken,roleGuard("branch:read"),getOne)
  .post("/",checkToken,roleGuard("branch:create"),create)
  .put("/:id",checkToken,roleGuard("branch:update"),update)
  .delete("/:id",checkToken,roleGuard("branch:delete"),remove)
export default router
