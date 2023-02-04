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
import { getFollowers } from './followers.model.js';
function getFollowedPosts(userId, skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const followedUsers = yield getFollowers(userId);
        const followedUserIds = followedUsers.map((user) => user.followedId);
        const posts = yield prisma.post.findMany({
            where: {
                OR: [{ authorId: { in: followedUserIds } }, { authorId: userId }],
            },
            include: {
                comments: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                profilePic: true,
                            },
                        },
                        likes: { select: { userId: true } },
                    },
                    orderBy: { createdAt: 'asc' },
                },
                likes: { select: { userId: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        return posts;
    });
}
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany({
            include: {
                author: { select: { name: true, profilePic: true } },
            },
        });
        return posts;
    });
}
function addPost(userId, tweetData) {
    return __awaiter(this, void 0, void 0, function* () {
        const createdPost = yield prisma.post.create({
            data: {
                authorId: userId,
                content: tweetData.tweet,
                image: tweetData.image,
            },
        });
        return createdPost;
    });
}
export { getFollowedPosts, getAllPosts, addPost };
