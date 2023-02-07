import express from 'express';

import {
  httpAddPost,
  httpGetAllPosts,
  httpGetBookmarks,
  httpGetFollowedPosts,
  httpGetOwnTweets,
  httpGetUserPostsWithLikes,
  httpGetUserPostsWithMedia,
  httpGetUserPostsWithReplies,
} from './posts.controller.js';

const postsRouter = express.Router();


postsRouter.get('/', httpGetAllPosts);
postsRouter.get('/followed', httpGetFollowedPosts);
postsRouter.get('/tweets', httpGetOwnTweets);
postsRouter.get('/replies', httpGetUserPostsWithReplies);
postsRouter.get('/media', httpGetUserPostsWithMedia);
postsRouter.get('/likes', httpGetUserPostsWithLikes);
postsRouter.get('/bookmarks', httpGetBookmarks);
postsRouter.post('/', httpAddPost);

export { postsRouter };
