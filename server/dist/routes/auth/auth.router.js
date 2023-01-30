import express from "express";
import { httpRegister } from "./auth.controller.js";
const authRouter = express.Router();
authRouter.post('/register', httpRegister);
export { authRouter };
