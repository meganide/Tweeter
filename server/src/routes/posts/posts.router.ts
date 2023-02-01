import express from 'express';

import { httpGetPosts } from './posts.controller.js';

const postsRouter = express.Router();

postsRouter.get('/', httpGetPosts)

export { postsRouter };
