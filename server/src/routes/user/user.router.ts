import express from "express";

import { httpEditUserProfile, httpGetMostRecentUsers, httpGetRandomUsers, httpGetUser, httpGetUserByName } from "./user.controller.js";

const userRouter = express.Router()

userRouter.put('/', httpEditUserProfile)
userRouter.get('/find', httpGetUser)
userRouter.get('/find/random', httpGetRandomUsers)
userRouter.get('/find/recent', httpGetMostRecentUsers)
userRouter.get('/find/:name', httpGetUserByName)

export {userRouter}