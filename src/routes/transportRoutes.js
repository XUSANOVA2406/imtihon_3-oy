import express from "express"
import {getAll,create,update,remove} from "../controllers/transportController.js"
import checkToken from "../middlewares/checkToken.js"
import roleGuard from "../middlewares/roleGuard.js"

const router = express.Router()
router
  .get("/",checkToken,roleGuard("transport:read"),getAll)
  .post("/",checkToken,roleGuard("transport:create"),create)
  .put("/:id",checkToken,roleGuard("transport:update"),update)
  .delete("/:id",checkToken,roleGuard("transport:delete"),remove)
export default router
