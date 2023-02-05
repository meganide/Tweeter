import express from "express";

import { httpGetUser } from "./user.controller.js";

const userRouter = express.Router()

userRouter.get('/find', httpGetUser)
userRouter.get('/find/:userId', httpGetUser)

export {userRouter}