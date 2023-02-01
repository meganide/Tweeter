import jwt from 'jsonwebtoken';
import { config } from '../config.js';
function jwtAuth(req, res, next) {
    const token = req.cookies.accessToken;
    try {
        const user = jwt.verify(token, config.JSON_SECRET);
        req.user = user.userId;
        next();
    }
    catch (error) {
        res.clearCookie('accessToken');
        return res.redirect('/login');
    }
}
export { jwtAuth };
