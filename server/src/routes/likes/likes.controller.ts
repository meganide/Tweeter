import { Response, Request } from 'express';

import { addLike, deleteLike } from '../../models/likes.model.js';

async function httpAddLike(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await addLike(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to add like.' });
  }
}

async function httpDeleteLike(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await deleteLike(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to remove like.' });
  }
}

export { httpAddLike, httpDeleteLike };
