var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { uploadImageToCloudinary } from '../../models/cloudinary.model.js';
function httpUploadImage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        const fileStr = req.body.data;
        try {
            const response = yield uploadImageToCloudinary(userId, fileStr);
            return res
                .status(200)
                .json({ message: 'Successfully uploaded image!', url: response === null || response === void 0 ? void 0 : response.secure_url });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                error: 'Failed to upload image!',
            });
        }
    });
}
export { httpUploadImage };
