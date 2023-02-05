var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUser } from '../../models/user.model.js';
function httpGetUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let userId = req.user;
        if (req.params.userId) {
            userId = req.params.userId;
            console.log('userid from params', userId);
        }
        console.log('req.user is ', userId);
        try {
            const user = yield getUser(userId);
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
export { httpGetUser };
