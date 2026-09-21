import { ProductModel } from '../models/index.js';
import { uploadImage, deleteImage } from '../lib/index.js';

const createProduct = async (productData) => {
  const { image: base64, ...rest } = productData;
  const image = await uploadImage(base64);
  try {
    const product = await ProductModel.create({ ...rest, image });
    return product;
  } catch (error) {
    await deleteImage(image.publicId)
    throw error
  }
};

export { createProduct };
