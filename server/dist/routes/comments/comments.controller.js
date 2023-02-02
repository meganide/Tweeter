var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addComment } from '../../models/comments.model.js';
function httpAddComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const commentsData = { commentData: req.body, userId: req.user };
        try {
            const comment = yield addComment(commentsData);
            return res.status(200).json({ message: 'Comment created!' });
        }
        catch (err) {
            console.log(err);
            return res.status(400).json({ error: 'Something went wrong posting comment!' });
        }
    });
}
export { httpAddComment };
