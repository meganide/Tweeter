import express from 'express';
import { httpUploadImage } from './cloudinary.controller.js';
const cloudinaryRouter = express.Router();
cloudinaryRouter.post('/upload', httpUploadImage);
export { cloudinaryRouter };
