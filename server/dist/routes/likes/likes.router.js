import express from 'express';
import { httpAddLikeToComment, httpAddLikeToPost, httpDeleteLikeFromComment, httpDeleteLikeFromPost } from './likes.controller.js';
const likesRouter = express.Router();
likesRouter.post('/', httpAddLikeToPost);
likesRouter.post('/comment', httpAddLikeToComment);
likesRouter.delete('/', httpDeleteLikeFromPost);
likesRouter.delete('/comment', httpDeleteLikeFromComment);
export { likesRouter };
