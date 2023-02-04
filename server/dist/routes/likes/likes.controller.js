var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addLikeToComment, addLikeToPost, deleteLikeFromComment, deleteLikeFromPost } from '../../models/likes.model.js';
function httpAddLikeToPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const postId = req.query.postId;
        try {
            const likes = yield addLikeToPost(userId, postId);
            return res.status(200).json(likes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to add like.' });
        }
    });
}
function httpAddLikeToComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const commentId = req.query.commentId;
        try {
            const likes = yield addLikeToComment(userId, commentId);
            return res.status(200).json(likes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to add like.' });
        }
    });
}
function httpDeleteLikeFromPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const postId = req.query.postId;
        try {
            const likes = yield deleteLikeFromPost(userId, postId);
            return res.status(200).json(likes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to remove like.' });
        }
    });
}
function httpDeleteLikeFromComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const commentId = req.query.commentId;
        try {
            const likes = yield deleteLikeFromComment(userId, commentId);
            return res.status(200).json(likes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to remove like.' });
        }
    });
}
export { httpAddLikeToPost, httpAddLikeToComment, httpDeleteLikeFromPost, httpDeleteLikeFromComment };
