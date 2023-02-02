import { Response } from 'express';

import { uploadImageToCloudinary } from '../../models/cloudinary.model.js';

async function httpUploadImage(req: any, res: Response) {
  const userId: string = req.user;
  const fileStr: string = req.body.data;

  try {
    const response = await uploadImageToCloudinary(userId, fileStr);
    return res
      .status(200)
      .json({ message: 'Successfully uploaded image!', url: response?.secure_url });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'Failed to upload image!',
    });
  }
}

export { httpUploadImage };
