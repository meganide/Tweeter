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
import { prisma } from '../services/db.services.js';
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: { id: userId },
            include: {
                profile: { select: { bio: true, backgroundImg: true } },
            },
        });
        const { password } = user, userWithoutPassword = __rest(user, ["password"]);
        return userWithoutPassword;
    });
}
function getUsers(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany({
            where: { name: { contains: name } },
            select: { name: true },
            take: 5,
        });
        return users;
    });
}
function getUserByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: { name: name },
            include: {
                profile: { select: { bio: true, backgroundImg: true } },
                followers: { select: { followerId: true } },
                following: { select: { followedId: true } },
                saves: true,
                retweets: true,
                likes: true,
                comments: true,
            },
        });
        const { password } = user, userWithoutPassword = __rest(user, ["password"]);
        return userWithoutPassword;
    });
}
function getRandomUsers(userId, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const totalUsers = yield prisma.user.count();
        const randomIndexes = new Set();
        while (randomIndexes.size < amount) {
            const randomIndex = Math.floor(Math.random() * totalUsers);
            randomIndexes.add(randomIndex);
        }
        const randomUsers = [];
        for (const index of Array.from(randomIndexes)) {
            const user = yield prisma.user.findFirst({
                where: { NOT: { id: userId } },
                include: {
                    profile: { select: { bio: true, backgroundImg: true } },
                    followers: { select: { followerId: true } },
                },
                skip: index,
            });
            if (user) {
                const { password } = user, userWithoutPassword = __rest(user, ["password"]);
                randomUsers.push(userWithoutPassword);
            }
        }
        return randomUsers;
    });
}
function getMostRecentUsers(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany({
            where: { NOT: { id: userId } },
            include: {
                profile: { select: { bio: true, backgroundImg: true } },
                followers: { select: { followerId: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 2,
        });
        users.forEach((user, index) => {
            delete users[index].password;
        });
        return users;
    });
}
function editUserProfile(userId, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { bio, backgroundImg, profilePic } = payload;
        yield prisma.user.update({
            where: { id: userId },
            data: Object.assign(Object.assign({}, (profilePic && { profilePic })), { profile: {
                    update: Object.assign(Object.assign({}, (backgroundImg && { backgroundImg })), (bio && { bio })),
                } }),
        });
        return { message: 'Successfully updated user!' };
    });
}
export { getUser, getUserByName, getRandomUsers, getMostRecentUsers, editUserProfile, getUsers };
