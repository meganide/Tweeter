import express from 'express';

import { authRouter } from './auth/auth.router.js';

const api = express.Router();

api.use('/auth', authRouter)

export { api };
