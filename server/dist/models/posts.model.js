var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { getFollowers } from './followers.model.js';
import { prisma } from '../services/db.services.js';
function getRetweets(skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const retweets = yield prisma.retweet.findMany({
            select: {
                post: {
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
                        saves: { select: { userId: true, savedAt: true } },
                        author: { select: { name: true, profilePic: true } },
                        retweets: { select: { userId: true } },
                    },
                },
                retweetedBy: { select: { name: true } },
                retweetedAt: true,
            },
            orderBy: { retweetedAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsFlat = retweets.map((_a) => {
            var { post } = _a, rest = __rest(_a, ["post"]);
            return (Object.assign(Object.assign({}, post), rest));
        });
        return retweetsFlat;
    });
}
function getRetweetsWithMedia(skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const retweetsWithMedia = yield prisma.retweet.findMany({
            where: { post: { image: { not: '' } } },
            select: {
                post: {
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
                        saves: { select: { userId: true, savedAt: true } },
                        author: { select: { name: true, profilePic: true } },
                        retweets: { select: { userId: true } },
                    },
                },
                retweetedBy: { select: { name: true } },
                retweetedAt: true,
            },
            orderBy: { retweetedAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsFlat = retweetsWithMedia.map((_a) => {
            var { post } = _a, rest = __rest(_a, ["post"]);
            return (Object.assign(Object.assign({}, post), rest));
        });
        return retweetsFlat;
    });
}
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweets = yield prisma.retweet.findMany({
            where: {
                OR: [{ userId: { in: followedUserIds } }, { userId: userId }],
            },
            select: {
                post: {
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
                        saves: { select: { userId: true, savedAt: true } },
                        author: { select: { name: true, profilePic: true } },
                        retweets: { select: { userId: true } },
                    },
                },
                retweetedBy: { select: { name: true } },
                retweetedAt: true,
            },
            orderBy: { retweetedAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsFlat = retweets.map((_a) => {
            var { post } = _a, rest = __rest(_a, ["post"]);
            return (Object.assign(Object.assign({}, post), rest));
        });
        const postsandRetweets = [...posts, ...retweetsFlat];
        return postsandRetweets;
    });
}
function getAllLatestPosts(skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany({
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true, savedAt: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsFlat = yield getRetweets(skip);
        const postsandRetweets = [...posts, ...retweetsFlat];
        return postsandRetweets;
    });
}
function getAllOldestPosts(skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany({
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true, savedAt: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'asc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsFlat = yield getRetweets(skip);
        const postsandRetweets = [...posts, ...retweetsFlat];
        return postsandRetweets;
    });
}
function getAllPostsWithMedia(skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany({
            where: { NOT: { image: '' } },
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true, savedAt: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsWithMedia = yield getRetweetsWithMedia(skip);
        const postsandRetweets = [...posts, ...retweetsWithMedia];
        return postsandRetweets;
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
function getOwnTweets(name, skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const ownTweets = yield prisma.post.findMany({
            where: {
                author: { name },
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweets = yield prisma.retweet.findMany({
            where: {
                retweetedBy: { name },
            },
            select: {
                post: {
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
                        saves: { select: { userId: true, savedAt: true } },
                        author: { select: { name: true, profilePic: true } },
                        retweets: { select: { userId: true } },
                    },
                },
                retweetedBy: { select: { name: true } },
                retweetedAt: true,
            },
            orderBy: { retweetedAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsFlat = retweets.map((_a) => {
            var { post } = _a, rest = __rest(_a, ["post"]);
            return (Object.assign(Object.assign({}, post), rest));
        });
        const OwnTweetsAndRetweets = [...ownTweets, ...retweetsFlat];
        return OwnTweetsAndRetweets;
    });
}
function getUserPostsWithReplies(name, skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const ownTweets = yield prisma.post.findMany({
            where: {
                comments: { some: { user: { name } } },
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        return ownTweets;
    });
}
function getUserPostsWithMedia(name, skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const ownTweets = yield prisma.post.findMany({
            where: {
                author: { name },
                image: { not: '' },
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsWithMedia = yield prisma.retweet.findMany({
            where: { post: { image: { not: '' } } },
            select: {
                post: {
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
                        saves: { select: { userId: true, savedAt: true } },
                        author: { select: { name: true, profilePic: true } },
                        retweets: { select: { userId: true } },
                    },
                },
                retweetedBy: { select: { name: true } },
                retweetedAt: true,
            },
            orderBy: { retweetedAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        const retweetsFlat = retweetsWithMedia.map((_a) => {
            var { post } = _a, rest = __rest(_a, ["post"]);
            return (Object.assign(Object.assign({}, post), rest));
        });
        const OwnTweetsAndRetweets = [...ownTweets, ...retweetsFlat];
        return OwnTweetsAndRetweets;
    });
}
function getUserPostsWithLikes(name, skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const ownTweets = yield prisma.post.findMany({
            where: {
                likes: { some: { likedBy: { name } } },
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
                retweets: { select: { userId: true } },
                saves: { select: { userId: true } },
                author: { select: { name: true, profilePic: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 7,
            skip: parseInt(skip),
        });
        return ownTweets;
    });
}
function getUserBookmarks(userId, skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookmarks = yield prisma.post.findMany({
            where: {
                saves: { some: { savedBy: { id: userId } } },
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
                saves: {
                    select: {
                        savedAt: true,
                        userId: true,
                    },
                    orderBy: {
                        savedAt: 'desc',
                    },
                },
                likes: { select: { userId: true } },
                retweets: { select: { userId: true } },
                author: { select: { name: true, profilePic: true } },
            },
            take: 7,
            skip: parseInt(skip),
        });
        return bookmarks;
    });
}
export { getFollowedPosts, getAllLatestPosts, getAllOldestPosts, getAllPostsWithMedia, addPost, getOwnTweets, getUserPostsWithReplies, getUserPostsWithMedia, getUserPostsWithLikes, getUserBookmarks, };
