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
import jwt from 'jsonwebtoken';
import { config } from '../../config.js';
import { createUser, findUser } from '../../models/auth.model.js';
import { verifyPassword } from '../../services/auth.services.js';
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
            return res.status(200).json(user); // or res.redirect and save the user in the cookies
        }
        catch (error) {
            console.error(error);
            return res.status(400).json({
                error: 'Something went wrong registering user! Please try again!',
            });
        }
    });
}
function httpLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userCredentials = req.body;
        const { email, password } = userCredentials;
        if (!email || !password) {
            return res.status(400).json({
                error: 'You must provide an email and password!',
            });
        }
        const existingUser = yield findUser(userCredentials);
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found!' });
        }
        if (existingUser.password) {
            const checkPassword = yield verifyPassword(password, existingUser.password);
            if (!checkPassword) {
                return res.status(401).json({
                    error: 'Wrong password!',
                });
            }
        }
        const { password: hashedPassword } = existingUser, userWithoutPassword = __rest(existingUser, ["password"]);
        const token = jwt.sign({ userId: existingUser.id }, config.JSON_SECRET, {
            expiresIn: '3d',
        });
        res
            .cookie('accessToken', token, {
            httpOnly: true,
            secure: true,
        })
            .status(200)
            .json(userWithoutPassword);
    });
}
function httpLogout(req, res) {
    res
        .clearCookie('accessToken', {
        secure: true,
    })
        .status(200)
        .json('User has been logged out!');
}
export { httpRegister, httpLogin, httpLogout };
