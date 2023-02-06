import express from "express";

import { httpGetMostRecentUsers, httpGetRandomUsers, httpGetUser, httpGetUserByName } from "./user.controller.js";

const userRouter = express.Router()

userRouter.get('/find', httpGetUser)
userRouter.get('/find/random', httpGetRandomUsers)
userRouter.get('/find/recent', httpGetMostRecentUsers)
userRouter.get('/find/:name', httpGetUserByName)

export {userRouter}