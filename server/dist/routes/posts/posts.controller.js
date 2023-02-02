var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addPost, getFollowedPosts } from '../../models/posts.model.js';
function httpGetFollowedPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        try {
            const followedPosts = yield getFollowedPosts(userId);
            return res.status(200).json(followedPosts);
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
export { httpGetFollowedPosts, httpAddPost };
