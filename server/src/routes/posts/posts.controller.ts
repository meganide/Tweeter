import { Request, Response } from 'express';

import { getFollowedPosts } from '../../models/posts.model.js';

async function httpGetFollowedPosts(req: any, res: Response) {
  const userId: string = req.user;
  try {
    const followedPosts = await getFollowedPosts(userId);
    return res.status(200).json(followedPosts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any posts" });
  }
}

export { httpGetFollowedPosts };
