import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';

import { authRouter } from './auth/auth.router.js';
import { cloudinaryRouter } from './cloudinary/cloudinary.router.js';
import { commentsRouter } from './comments/comments.router.js';
import { followersRouter } from './follow/follow.router.js';
import { likesRouter } from './likes/likes.router.js';
import { postsRouter } from './posts/posts.router.js';
import { retweetsRouter } from './retweets/retweets.router.js';
import { savesRouter } from './saves/saves.router.js';
import { userRouter } from './user/user.router.js';

const api = express.Router();

api.use('/auth', authRouter)
api.use('/users', jwtAuth, userRouter)
api.use('/posts', jwtAuth, postsRouter)
api.use('/cloudinary', jwtAuth, cloudinaryRouter)
api.use('/comments', jwtAuth, commentsRouter)
api.use('/likes', jwtAuth, likesRouter)
api.use('/saves', jwtAuth, savesRouter)
api.use('/retweets', jwtAuth, retweetsRouter)
api.use('/followers', jwtAuth, followersRouter);

export { api };
