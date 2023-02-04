import express from 'express';
import { httpAddLike, httpGetLikes } from './likes.controller.js';

const likesRouter = express.Router();

likesRouter.get('/', httpGetLikes);
likesRouter.post('/', httpAddLike);

export { likesRouter };
