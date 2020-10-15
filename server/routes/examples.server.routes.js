import { hello } from "../controllers/examples.server.controller.js"
import express from "express";
const router = express.Router();

router.route('/')
  .get(hello);
  
export const exampleRouter = router;