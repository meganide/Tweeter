import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';

function jwtAuth(req: any, res: Response, next: NextFunction) {
  const token = req.cookies.accessToken;

  try {
    const user = jwt.verify(token, config.JSON_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.clearCookie('accessToken');
    return res.redirect('/login');
  }
}

export {jwtAuth};