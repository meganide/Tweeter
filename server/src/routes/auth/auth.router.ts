import express from "express"

import { httpLogin, httpLogout, httpRegister } from "./auth.controller.js"

const authRouter = express.Router()

authRouter.post('/register', httpRegister)
authRouter.post('/login', httpLogin)
authRouter.post('/logout', httpLogout)

export {authRouter}