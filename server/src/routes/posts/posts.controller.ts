import {
  addPost,
  deletePost,
  editPost,
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
import { sortBookmarks, sortPostsAndRetweets } from '../../utils/helpers.js';

import { Response } from 'express';

export interface ITweetData {
  tweet: string;
  image?: string;
}

async function httpGetFollowedPosts(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const followedPosts = await getFollowedPosts(userId, skip);
    const sortedPosts = sortPostsAndRetweets(followedPosts);
    return res.status(200).json(sortedPosts);
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
    const sortedTweets = sortPostsAndRetweets(ownTweets);
    return res.status(200).json(sortedTweets);
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
    const sortedTweets = sortPostsAndRetweets(ownTweets);
    return res.status(200).json(sortedTweets);
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

  try {
    let posts;
    if (sortOption === 'Latest') {
      posts = await getAllLatestPosts(skip);
      posts = sortPostsAndRetweets(posts);
    } else if (sortOption === 'Oldest') {
      posts = await getAllOldestPosts(skip);
      posts = sortPostsAndRetweets(posts, 'oldest');
    } else if (sortOption === 'Media') {
      posts = await getAllPostsWithMedia(skip);
      posts = sortPostsAndRetweets(posts);
    }

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any posts" });
  }
}

async function httpEditPost(req: any, res: Response) {
  const userId: string = req.user;
  const payload = req.body;
  const currentUserId = req.body.userId;

  if (currentUserId === userId) {
    try {
      await editPost(payload);

      return res.status(200).json({ message: 'Successfully edited post!' });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: 'Failed to edit post.' });
    }
  }
}

async function httpDeletePost(req: any, res: Response) {
  const userId: string = req.user;
  const postId: string = req.query.postId;
  const currentUserId: string = req.query.userId;

  if (currentUserId === userId) {
    try {
      await deletePost(postId);
      return res.status(200).json({ message: 'Successfully removed post!' });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: 'Failed to delete post.' });
    }
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
  httpEditPost,
  httpDeletePost,
};
