import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { authRouter } from './auth/auth.router.js';
import { userRouter } from './user/user.router.js';
const api = express.Router();
api.use('/auth', authRouter);
api.use('/user', jwtAuth, userRouter);
export { api };
