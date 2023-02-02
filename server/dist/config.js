import dotenv from 'dotenv';
dotenv.config();
const config = {
    JSON_SECRET: process.env.JSON_SECRET || "1qhWLThHGFXa51mnVxgJdQ==",
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
export { config };
