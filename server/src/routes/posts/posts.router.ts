import express from 'express';

import { httpAddPost, httpGetFollowedPosts, httpGetOwnTweets, httpGetUserPostsWithLikes, httpGetUserPostsWithMedia, httpGetUserPostsWithReplies } from './posts.controller.js';

const postsRouter = express.Router();

postsRouter.get('/followed', httpGetFollowedPosts);
postsRouter.get('/tweets', httpGetOwnTweets);
postsRouter.get('/replies', httpGetUserPostsWithReplies);
postsRouter.get('/media', httpGetUserPostsWithMedia);
postsRouter.get('/likes', httpGetUserPostsWithLikes);
postsRouter.post('/', httpAddPost);

export { postsRouter };
