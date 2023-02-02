import cloudinary from 'cloudinary';
import { config } from '../config.js';
const cloudinaryV2 = cloudinary.v2;
cloudinaryV2.config({
    cloud_name: config.CLOUDINARY_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET,
});
export { cloudinaryV2 };
