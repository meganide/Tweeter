import { Response } from 'express';

import { sortBookmarks } from '../../utils/helpers.js';
import {
  addPost,
  getAllLatestPosts,
  getAllOldestPosts,
  getAllPostsWithMedia,
  getFollowedPosts,
  getOwnTweets,
  getUserBookmarks,
  getUserPostsWithLikes,
  getUserPostsWithMedia,
  getUserPostsWithReplies,
} from '../../models/posts.model.js';

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
  const name: string = req.query.name;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getOwnTweets(name, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any tweets" });
  }
}

async function httpGetUserPostsWithReplies(req: any, res: Response) {
  const name: string = req.query.name;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getUserPostsWithReplies(name, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any tweets or replies" });
  }
}

async function httpGetUserPostsWithMedia(req: any, res: Response) {
  const name: string = req.query.name;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getUserPostsWithMedia(name, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any tweets with media" });
  }
}

async function httpGetUserPostsWithLikes(req: any, res: Response) {
  const name: string = req.query.name;
  const { skip }: any = req.query;

  try {
    const ownTweets = await getUserPostsWithLikes(name, skip);
    return res.status(200).json(ownTweets);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any posts user has liked." });
  }
}

async function httpGetBookmarks(req: any, res: Response) {
  const userId: string = req.user;
  const { skip, sortOption }: any = req.query;

  try {
    const bookmarks = await getUserBookmarks(userId, skip);

    const sortedPosts = sortBookmarks(bookmarks, sortOption);

    return res.status(200).json(sortedPosts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any bookmarks" });
  }
}

async function httpGetAllPosts(req: any, res: Response) {
  const { skip, sortOption }: any = req.query;

  console.log(sortOption);

  try {
    let posts;
    if (sortOption === 'Latest') {
      posts = await getAllLatestPosts(skip);
    } else if (sortOption === 'Oldest') {
      posts = await getAllOldestPosts(skip);
    } else if (sortOption === 'Media') {
      posts = await getAllPostsWithMedia(skip);
    }

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any posts" });
  }
}

export {
  httpGetFollowedPosts,
  httpAddPost,
  httpGetOwnTweets,
  httpGetUserPostsWithReplies,
  httpGetUserPostsWithMedia,
  httpGetUserPostsWithLikes,
  httpGetBookmarks,
  httpGetAllPosts,
};
