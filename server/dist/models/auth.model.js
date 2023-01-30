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
import { prisma } from '../server.js';
import bcrypt from "bcrypt";
function register(userCredentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password } = userCredentials;
        const hashedPassword = yield hashPassword(password);
        try {
            const user = yield prisma.user.create({
                data: {
                    name,
                    password: hashedPassword,
                    email,
                    profile: {
                        create: {},
                    },
                },
                include: {
                    profile: { select: { bio: true, backgroundImg: true } },
                },
            });
            const { password: hash } = user, userWithoutPassword = __rest(user, ["password"]);
            return { message: 'User successfully created!', user: userWithoutPassword };
        }
        catch (error) {
            console.log(error);
            return { message: 'There was an error creating user!' };
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
function verifyPassword(password, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcrypt.compare(password, hashedPassword);
        return isMatch;
    });
}
export { register };
