import { httpEditUserProfile, httpGetMostRecentUsers, httpGetRandomUsers, httpGetUser, httpGetUserByName, httpGetUsers } from "./user.controller.js";

import express from "express";

const userRouter = express.Router()

userRouter.put('/', httpEditUserProfile)
userRouter.get('/findmany', httpGetUsers)
userRouter.get('/find', httpGetUser)
userRouter.get('/find/random', httpGetRandomUsers)
userRouter.get('/find/recent', httpGetMostRecentUsers)
userRouter.get('/find/:name', httpGetUserByName)

export {userRouter}