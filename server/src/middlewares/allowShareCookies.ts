import { Request, Response, NextFunction } from 'express';

function allowShareCookies(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow send cookies to client
  next();
}

export {allowShareCookies};