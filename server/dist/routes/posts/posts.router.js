import { httpAddPost, httpDeletePost, httpEditPost, httpGetAllPosts, httpGetBookmarks, httpGetFollowedPosts, httpGetOwnTweets, httpGetUserPostsWithLikes, httpGetUserPostsWithMedia, httpGetUserPostsWithReplies, } from './posts.controller.js';
import express from 'express';
const postsRouter = express.Router();
postsRouter.get('/', httpGetAllPosts);
postsRouter.get('/followed', httpGetFollowedPosts);
postsRouter.get('/tweets', httpGetOwnTweets);
postsRouter.get('/replies', httpGetUserPostsWithReplies);
postsRouter.get('/media', httpGetUserPostsWithMedia);
postsRouter.get('/likes', httpGetUserPostsWithLikes);
postsRouter.get('/bookmarks', httpGetBookmarks);
postsRouter.post('/', httpAddPost);
postsRouter.put('/', httpEditPost);
postsRouter.delete('/', httpDeletePost);
export { postsRouter };
