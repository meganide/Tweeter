import express from 'express';
import { httpAddRetweet, httpGetRetweets } from './retweets.controller.js';
const retweetsRouter = express.Router();
retweetsRouter.get('/', httpGetRetweets);
retweetsRouter.post('/', httpAddRetweet);
export { retweetsRouter };
