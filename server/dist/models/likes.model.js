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
function addLike(userId, postId) {
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
function deleteLike(userId, postId) {
    return __awaiter(this, void 0, void 0, function* () {
        const likes = yield prisma.like.delete({
            where: {
                userId_postId: {
                    userId: userId,
                    postId: postId,
                }
            }
        });
        return likes;
    });
}
export { addLike, deleteLike };
