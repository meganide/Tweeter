import express from 'express';

import {
  httpAddPost,
  httpGetFollowedPosts,
  httpGetLatestUserBookmarks,
  httpGetMediaBookmarks,
  httpGetOldestUserBookmarks,
  httpGetOwnTweets,
  httpGetTopLikesBookmarks,
  httpGetUserPostsWithLikes,
  httpGetUserPostsWithMedia,
  httpGetUserPostsWithReplies,
} from './posts.controller.js';

const postsRouter = express.Router();

postsRouter.get('/followed', httpGetFollowedPosts);
postsRouter.get('/tweets', httpGetOwnTweets);
postsRouter.get('/replies', httpGetUserPostsWithReplies);
postsRouter.get('/media', httpGetUserPostsWithMedia);
postsRouter.get('/likes', httpGetUserPostsWithLikes);
postsRouter.get('/bookmarks/latest', httpGetLatestUserBookmarks);
postsRouter.get('/bookmarks/oldest', httpGetOldestUserBookmarks);
postsRouter.get('/bookmarks/top', httpGetTopLikesBookmarks);
postsRouter.get('/bookmarks/media', httpGetMediaBookmarks);
postsRouter.post('/', httpAddPost);

export { postsRouter };
