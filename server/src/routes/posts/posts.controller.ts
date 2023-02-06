import { Response } from 'express';

import { addPost, getFollowedPosts, getOwnTweets, getUserPostsWithLikes, getUserPostsWithMedia, getUserPostsWithReplies } from '../../models/posts.model.js';

export interface ITweetData {
  tweet: string;
  image?: string;
}

async function httpGetFollowedPosts(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const followedPosts = await getFollowedPosts(userId, skip);
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
    return res.status(200).json({ message: 'Post has been created!' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Couldn't create tweet!" });
  }
}

async function httpGetOwnTweets(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getOwnTweets(userId, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any tweets" });
  }
}

async function httpGetUserPostsWithReplies(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getUserPostsWithReplies(userId, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any tweets or replies" });
  }
}

async function httpGetUserPostsWithMedia(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getUserPostsWithMedia(userId, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any tweets with media" });
  }
}

async function httpGetUserPostsWithLikes(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getUserPostsWithLikes(userId, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any posts user has liked." });
  }
}

export { httpGetFollowedPosts, httpAddPost, httpGetOwnTweets, httpGetUserPostsWithReplies, httpGetUserPostsWithMedia, httpGetUserPostsWithLikes };
