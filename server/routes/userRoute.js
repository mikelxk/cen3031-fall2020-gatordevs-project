import express from "express";
import {
  index,
  create,
  authenticate,
  show,
  update,
  destroy,
} from "../controllers/userController.js";
import { verifyToken } from "../functions/auth.js";
const userRouter = new express.Router();
userRouter.route("/").get(index).post(create);

userRouter.post("/authenticate", authenticate);

userRouter.use(verifyToken);
userRouter.route("/:id").get(show).patch(update).delete(destroy);
export { userRouter };
