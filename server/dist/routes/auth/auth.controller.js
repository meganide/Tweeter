var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createUser, findUser } from '../../models/auth.model.js';
function httpRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userCredentials = req.body;
            const { name, email, password } = userCredentials;
            if (!name || !email || !password) {
                return res.status(400).json({
                    error: 'You must provide a name, email and password!',
                });
            }
            const existingUser = yield findUser(userCredentials);
            if (existingUser) {
                return res.status(409).json({ error: 'Username or email already exists!' });
            }
            const user = yield createUser(userCredentials);
            return res.status(200).json(user);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json({
                error: 'Something went wrong registering user! Please try again!',
            });
        }
    });
}
export { httpRegister };
