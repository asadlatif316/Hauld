import { ProductModel } from '../models/index.js';
import { uploadImage, deleteImage } from '../lib/index.js';

const createProduct = async (productData) => {
  const { image: base64, ...rest } = productData;
  if (!base64) {
    return await ProductModel.create(rest);
  }
  const image = await uploadImage(base64);
  try {
    const product = await ProductModel.create({ ...rest, image });
    return product;
  } catch (error) {
    await deleteImage(image.publicId);
    throw error;
  }
};

const fetchProducts = async (query) => {
  const { search, category, isActive, isFeatured, inStock } = query;
  const filter = {};

  if (search) {
    filter.$or = [{ name: { $regex: search, $options: 'i' } }];
    filter.$or = [{ description: { $regex: search, $options: 'i' } }];
  }

  if (category && category !== 'all') {
    filter.category = category;
  }

  if(isActive !== undefined) filter.isActive = isActive === 'true'
  if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true'  
  
  if(inStock === 'true') filter.stock = {$gt:0}
  if(inStock === 'false') filter.stock = 0

  const products = await ProductModel.find(filter);
  return products;
};

export { createProduct, fetchProducts };
