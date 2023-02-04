import express from 'express';
import { httpAddLike, httpGetLikes } from './saves.controller.js';

const savesRouter = express.Router();

savesRouter.get('/', httpGetLikes);
savesRouter.post('/', httpAddLike);

export { savesRouter };
