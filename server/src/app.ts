import express, { Express, Request, Response } from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { fileURLToPath } from 'url';
import { api } from './routes/api.js';
import { allowShareCookies } from './middlewares/allowShareCookies.js';
import { jwtAuth } from './middlewares/jwtAuth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(allowShareCookies);
// app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(cookieParser());
app.use('/api', api);

app.get('/', jwtAuth, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get(['/login', '/register'], (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/*', jwtAuth, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export { app };
