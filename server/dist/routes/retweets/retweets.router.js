import express from 'express';
import { httpAddRetweet, httpDeleteRetweet } from './retweets.controller.js';
const retweetsRouter = express.Router();
retweetsRouter.post('/', httpAddRetweet);
retweetsRouter.delete('/', httpDeleteRetweet);
export { retweetsRouter };
