import express from "express";

import { httpGetUser, httpGetUserByName } from "./user.controller.js";

const userRouter = express.Router()

userRouter.get('/find', httpGetUser)
userRouter.get('/find/:name', httpGetUserByName)

export {userRouter}