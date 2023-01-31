import express, { Express, Request, Response } from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { fileURLToPath } from 'url';
import { api } from './routes/api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', api);

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export { app };
