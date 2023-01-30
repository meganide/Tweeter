var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { register } from '../../models/auth.model.js';
import bcrypt from "bcrypt";
function httpRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userCredentials = req.body;
        userCredentials.password = yield hashPassword(userCredentials.password);
        const user = yield register(userCredentials);
        if (user.message === 'User successfully created!') {
            return res.status(200).json(user);
        }
        else {
            return res.status(400).json(user);
        }
    });
}
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltRounds = 10;
        const hashedPassword = yield bcrypt.hash(password, saltRounds);
        return hashedPassword;
    });
}
export { httpRegister };
