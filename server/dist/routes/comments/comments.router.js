import express from 'express';
import { httpAddComment } from './comments.controller.js';
const commentsRouter = express.Router();
commentsRouter.post('/', httpAddComment);
export { commentsRouter };
