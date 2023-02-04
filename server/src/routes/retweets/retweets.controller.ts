import { Response, Request } from 'express';

import { getRetweets } from '../../models/retweets.model.js';

async function httpGetRetweets(req: Request, res: Response) {
  const postId = req.query.postId as string;

  try {
    const retweets = await getRetweets(postId);
    console.log(retweets);

    return res.status(200).json(retweets);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to get retweets.' });
  }
}

function httpAddRetweet() {}

export { httpAddRetweet, httpGetRetweets };
