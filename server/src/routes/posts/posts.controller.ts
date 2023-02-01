import { Request, Response } from 'express';

import { getPosts } from '../../models/posts.model.js';

async function httpGetPosts(req: Request, res: Response) {
  try {
    const posts = await getPosts();
    console.log(posts);
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any posts" });
  }
}

export { httpGetPosts };
