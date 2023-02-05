import express from 'express';
import { httpFollow, httpUnfollow } from './follow.controller.js';
const followersRouter = express.Router();
followersRouter.post('/', httpFollow);
followersRouter.delete('/', httpUnfollow);
export { followersRouter };
