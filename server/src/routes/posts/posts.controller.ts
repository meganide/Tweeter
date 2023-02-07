import { Response } from 'express';

import {
  addPost,
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

async function httpGetLatestUserBookmarks(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const bookmarks = await getUserBookmarks(userId, skip);

    const sortedPosts = bookmarks.sort((a: any, b: any) => {
      const aSaveDate = a.saves[0].savedAt.getTime();
      const bSaveDate = b.saves[0].savedAt.getTime();

      return bSaveDate - aSaveDate;
    });

    return res.status(200).json(sortedPosts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any bookmarks" });
  }
}

async function httpGetOldestUserBookmarks(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const bookmarks = await getUserBookmarks(userId, skip);

    const sortedPosts = bookmarks.sort((a: any, b: any) => {
      const aSaveDate = a.saves[0].savedAt.getTime();
      const bSaveDate = b.saves[0].savedAt.getTime();

      return aSaveDate - bSaveDate;
    });

    return res.status(200).json(sortedPosts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any bookmarks" });
  }
}

async function httpGetTopLikesBookmarks(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const bookmarks = await getUserBookmarks(userId, skip);

    const sortedPosts = bookmarks.sort((a: any, b: any) => {
      const aAmountLikes = a.likes.length;
      const bAmountLikes = b.likes.length;

      return bAmountLikes - aAmountLikes;
    });

    return res.status(200).json(sortedPosts);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any bookmarks" });
  }
}

async function httpGetMediaBookmarks(req: any, res: Response) {
  const userId: string = req.user;
  const { skip }: any = req.query;

  try {
    const bookmarks = await getUserBookmarks(userId, skip);

    const filteredBookmarks = bookmarks.filter((bookmark: any) => {
      return bookmark.image !== '';
    });

    return res.status(200).json(filteredBookmarks);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Couldn't find any bookmarks" });
  }
}

export {
  httpGetFollowedPosts,
  httpAddPost,
  httpGetOwnTweets,
  httpGetUserPostsWithReplies,
  httpGetUserPostsWithMedia,
  httpGetUserPostsWithLikes,
  httpGetLatestUserBookmarks,
  httpGetOldestUserBookmarks,
  httpGetTopLikesBookmarks,
  httpGetMediaBookmarks,
};
