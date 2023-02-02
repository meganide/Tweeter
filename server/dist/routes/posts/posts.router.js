import express from 'express';
import { httpAddPost, httpGetFollowedPosts } from './posts.controller.js';
const postsRouter = express.Router();
postsRouter.get('/followed', httpGetFollowedPosts);
postsRouter.post('/', httpAddPost);
export { postsRouter };
