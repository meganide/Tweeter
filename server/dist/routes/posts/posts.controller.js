var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addPost, deletePost, editPost, getAllLatestPosts, getAllOldestPosts, getAllPostsWithMedia, getFollowedPosts, getOwnTweets, getUserBookmarks, getUserPostsWithLikes, getUserPostsWithMedia, getUserPostsWithReplies, } from '../../models/posts.model.js';
import { sortBookmarks, sortPostsAndRetweets } from '../../utils/helpers.js';
function httpGetFollowedPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const { skip } = req.query;
        try {
            const followedPosts = yield getFollowedPosts(userId, skip);
            const sortedPosts = sortPostsAndRetweets(followedPosts);
            return res.status(200).json(sortedPosts);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({ error: "Couldn't find any posts" });
        }
    });
}
function httpAddPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const tweetData = req.body;
        try {
            yield addPost(userId, tweetData);
            return res.status(200).json({ message: 'Post has been created!' });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: "Couldn't create tweet!" });
        }
    });
}
function httpGetOwnTweets(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.query.name;
        const { skip } = req.query;
        try {
            const ownTweets = yield getOwnTweets(name, skip);
            const sortedTweets = sortPostsAndRetweets(ownTweets);
            return res.status(200).json(sortedTweets);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({ error: "Couldn't find any tweets" });
        }
    });
}
function httpGetUserPostsWithReplies(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.query.name;
        const { skip } = req.query;
        try {
            const ownTweets = yield getUserPostsWithReplies(name, skip);
            return res.status(200).json(ownTweets);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({ error: "Couldn't find any tweets or replies" });
        }
    });
}
function httpGetUserPostsWithMedia(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.query.name;
        const { skip } = req.query;
        try {
            const ownTweets = yield getUserPostsWithMedia(name, skip);
            const sortedTweets = sortPostsAndRetweets(ownTweets);
            return res.status(200).json(sortedTweets);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({ error: "Couldn't find any tweets with media" });
        }
    });
}
function httpGetUserPostsWithLikes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.query.name;
        const { skip } = req.query;
        try {
            const ownTweets = yield getUserPostsWithLikes(name, skip);
            return res.status(200).json(ownTweets);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({ error: "Couldn't find any posts user has liked." });
        }
    });
}
function httpGetBookmarks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const { skip, sortOption } = req.query;
        try {
            const bookmarks = yield getUserBookmarks(userId, skip);
            const sortedPosts = sortBookmarks(bookmarks, sortOption);
            return res.status(200).json(sortedPosts);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({ error: "Couldn't find any bookmarks" });
        }
    });
}
function httpGetAllPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { skip, sortOption } = req.query;
        try {
            let posts;
            if (sortOption === 'Latest') {
                posts = yield getAllLatestPosts(skip);
                posts = sortPostsAndRetweets(posts);
            }
            else if (sortOption === 'Oldest') {
                posts = yield getAllOldestPosts(skip);
                posts = sortPostsAndRetweets(posts, 'oldest');
            }
            else if (sortOption === 'Media') {
                posts = yield getAllPostsWithMedia(skip);
                posts = sortPostsAndRetweets(posts);
            }
            return res.status(200).json(posts);
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({ error: "Couldn't find any posts" });
        }
    });
}
function httpEditPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const payload = req.body;
        const currentUserId = req.body.userId;
        if (currentUserId === userId) {
            try {
                yield editPost(payload);
                return res.status(200).json({ message: 'Successfully edited post!' });
            }
            catch (error) {
                console.log(error);
                return res.status(404).json({ error: 'Failed to edit post.' });
            }
        }
    });
}
function httpDeletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const postId = req.query.postId;
        const currentUserId = req.query.userId;
        if (currentUserId === userId) {
            try {
                yield deletePost(postId);
                return res.status(200).json({ message: 'Successfully removed post!' });
            }
            catch (error) {
                console.log(error);
                return res.status(404).json({ error: 'Failed to delete post.' });
            }
        }
    });
}
export { httpGetFollowedPosts, httpAddPost, httpGetOwnTweets, httpGetUserPostsWithReplies, httpGetUserPostsWithMedia, httpGetUserPostsWithLikes, httpGetBookmarks, httpGetAllPosts, httpEditPost, httpDeletePost, };
