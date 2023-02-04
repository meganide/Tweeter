import express from 'express';
import { httpAddLike, httpDeleteLike } from './likes.controller.js';
const likesRouter = express.Router();
likesRouter.post('/', httpAddLike);
likesRouter.delete('/', httpDeleteLike);
export { likesRouter };
