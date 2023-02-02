import { Request, Response } from 'express';

import { addPost, getFollowedPosts } from '../../models/posts.model.js';

export interface ITweetData {
  tweet: string;
  image?: string;
}

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

async function httpAddPost(req: any, res: Response) {
  const userId: string = req.user;
  const tweetData: ITweetData = req.body;

  try {
    await addPost(userId, tweetData);
    return res.status(200).json({message: 'Post has been created!'})
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Couldn't create tweet!" });
  }
}


export { httpGetFollowedPosts, httpAddPost };
