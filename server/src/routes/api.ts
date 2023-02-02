import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';

import { authRouter } from './auth/auth.router.js';
import { cloudinaryRouter } from './cloudinary/cloudinary.router.js';
import { commentsRouter } from './comments/comments.router.js';
import { postsRouter } from './posts/posts.router.js';
import { userRouter } from './user/user.router.js';

const api = express.Router();

api.use('/auth', authRouter)
api.use('/user', jwtAuth, userRouter)
api.use('/posts', jwtAuth, postsRouter)
api.use('/cloudinary', jwtAuth, cloudinaryRouter)
api.use('/comments', jwtAuth, commentsRouter)

export { api };
