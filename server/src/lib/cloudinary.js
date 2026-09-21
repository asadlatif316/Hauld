import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (image) => {
  const result = await cloudinary.uploader.upload(image, {
    folder: 'hauld/products',
  });
  return { url: result.secure_url, publicId: result.public_id };
};

const deleteImage = async (publicId) => {
  cloudinary.uploader.destroy(publicId);
};

export { uploadImage, deleteImage };
