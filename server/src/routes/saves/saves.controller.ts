import { Response } from 'express';
import { addSave, deleteSave } from '../../models/saves.model.js';

async function httpAddSaves(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await addSave(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to add save.' });
  }
}

async function httpDeleteSave(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await deleteSave(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to remove save.' });
  }
}

export { httpAddSaves, httpDeleteSave };
