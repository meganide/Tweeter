import express from 'express';
import { httpGetFollowersPosts } from './posts.controller.js';
const postsRouter = express.Router();
postsRouter.get('/', httpGetFollowersPosts);
export { postsRouter };
