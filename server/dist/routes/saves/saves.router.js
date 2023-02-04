import express from 'express';
import { httpAddSaves, httpDeleteSave } from './saves.controller.js';
const savesRouter = express.Router();
savesRouter.post('/', httpAddSaves);
savesRouter.delete('/', httpDeleteSave);
export { savesRouter };
