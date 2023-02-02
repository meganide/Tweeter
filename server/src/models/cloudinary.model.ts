import { cloudinaryV2 } from '../services/cloudinary.services.js';

async function uploadImageToCloudinary(userId: string, fileStr: string) {
  const uploadedResponse = await cloudinaryV2.uploader.upload(fileStr, {
    upload_preset: 'profile',
    folder: 'tweeter/' + userId,
  });


  return uploadedResponse;
}

export { uploadImageToCloudinary };
