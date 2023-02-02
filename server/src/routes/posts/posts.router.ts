import express from 'express';

import { httpGetFollowedPosts } from './posts.controller.js';

const postsRouter = express.Router();

postsRouter.get('/followed', httpGetFollowedPosts);

export { postsRouter };
