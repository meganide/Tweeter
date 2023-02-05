var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { follow, unfollow } from '../../models/follow.model.js';
function httpFollow(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const followerUserId = req.user;
        const followedUserId = req.query.followedUserId;
        try {
            const follower = yield follow(followerUserId, followedUserId);
            return res.status(200).json(follower);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to follow.' });
        }
    });
}
function httpUnfollow(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const followerUserId = req.user;
        const followedUserId = req.query.followedUserId;
        try {
            const follower = yield unfollow(followerUserId, followedUserId);
            return res.status(200).json(follower);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to unfollow.' });
        }
    });
}
export { httpFollow, httpUnfollow };
