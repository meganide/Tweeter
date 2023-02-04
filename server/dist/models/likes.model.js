var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { prisma } from '../services/db.services.js';
function addLikeToPost(userId, postId) {
    return __awaiter(this, void 0, void 0, function* () {
        const likes = yield prisma.like.create({
            data: {
                postId,
                userId,
            },
        });
        return likes;
    });
}
function addLikeToComment(userId, commentId) {
    return __awaiter(this, void 0, void 0, function* () {
        const likes = yield prisma.like.create({
            data: {
                commentId,
                userId,
            },
        });
        return likes;
    });
}
function deleteLikeFromPost(userId, postId) {
    return __awaiter(this, void 0, void 0, function* () {
        const likes = yield prisma.like.delete({
            where: {
                userId_postId: {
                    userId: userId,
                    postId: postId,
                },
            },
        });
        return likes;
    });
}
function deleteLikeFromComment(userId, commentId) {
    return __awaiter(this, void 0, void 0, function* () {
        const likes = yield prisma.like.delete({
            where: {
                userId_commentId: {
                    userId: userId,
                    commentId: commentId,
                },
            },
        });
        return likes;
    });
}
export { addLikeToPost, addLikeToComment, deleteLikeFromComment, deleteLikeFromPost };
