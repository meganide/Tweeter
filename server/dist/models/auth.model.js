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
import { hashPassword } from '../services/auth.services.js';
function findUser(userCredentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email } = userCredentials;
        const userExists = yield prisma.user.findFirst({
            where: {
                OR: [{ name }, { email }],
            },
        });
        return userExists;
    });
}
function createUser(userCredentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password } = userCredentials;
        const hashedPassword = yield hashPassword(password);
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
        return { user: userWithoutPassword };
    });
}
export { findUser, createUser };
