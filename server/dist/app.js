import express from 'express';
import path from 'path';
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
app.use(cors({
    origin: ['https://tweeter-ps0r.onrender.com', 'http://localhost:5173'],
}));
app.use(cookieParser());
app.use('/api', api);
app.get('/', jwtAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get(['/login', '/register'], (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/*', jwtAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
export { app };
