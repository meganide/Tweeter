import { Response, Request } from 'express';

import { addRetweet, deleteRetweet } from '../../models/retweets.model.js';

async function httpAddRetweet(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await addRetweet(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to add retweet.' });
  }
}

async function httpDeleteRetweet(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await deleteRetweet(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to remove retweet.' });
  }
}


export { httpAddRetweet, httpDeleteRetweet };
