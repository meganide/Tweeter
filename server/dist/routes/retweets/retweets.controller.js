var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getRetweets } from '../../models/retweets.model.js';
function httpGetRetweets(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const postId = req.query.postId;
        try {
            const retweets = yield getRetweets(postId);
            console.log(retweets);
            return res.status(200).json(retweets);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to get retweets.' });
        }
    });
}
function httpAddRetweet() { }
export { httpAddRetweet, httpGetRetweets };
