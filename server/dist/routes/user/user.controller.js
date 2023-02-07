var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { editUserProfile, getMostRecentUsers, getRandomUsers, getUser, getUserByName } from '../../models/user.model.js';
function httpGetUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let userId = req.user;
        try {
            const user = yield getUser(userId);
            console.log('received user', user);
            return res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                error: 'There was an error getting user.',
            });
        }
    });
}
function httpGetUserByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let name = req.params.name;
        try {
            const user = yield getUserByName(name);
            return res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                error: 'There was an error getting user.',
            });
        }
    });
}
function httpGetRandomUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        let amount = parseInt(req.query.amount);
        try {
            const user = yield getRandomUsers(userId, amount);
            return res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                error: 'There was an error getting users.',
            });
        }
    });
}
function httpGetMostRecentUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        try {
            const user = yield getMostRecentUsers(userId);
            return res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                error: 'There was an error getting most recent users.',
            });
        }
    });
}
function httpEditUserProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const payload = req.body;
        try {
            const updatedUser = yield editUserProfile(userId, payload);
            return res.status(200).json(updatedUser);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                error: 'There was an error updating user profile!',
            });
        }
    });
}
export { httpGetUser, httpGetUserByName, httpGetRandomUsers, httpGetMostRecentUsers, httpEditUserProfile };
