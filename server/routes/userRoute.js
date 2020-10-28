import express from "express";
import {
  index,
  create,
  autheticate,
  show,
  update,
  destory,
} from "../controllers/userController.js";
import { verifyToken } from "../functions/auth.js";
const userRouter = new express.Router();
userRouter.route("/").get(index).post(create);
userRouter.post("/login", autheticate);
userRouter.post("/api/users",create);
userRouter.use(verifyToken);
userRouter
  .route("/:id")
  .get(show)
  .patch(update)
  .delete(destory);
export { userRouter };
