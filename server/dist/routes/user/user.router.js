import express from "express";
import { httpGetUserById } from "./user.controller.js";
const userRouter = express.Router();
userRouter.get('/', httpGetUserById);
export { userRouter };
