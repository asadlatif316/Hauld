import { ProductModel } from '../models/index.js';

const createProduct = async (productData) => {
  const product = await ProductModel.create(productData);
  return product;
};

export { createProduct };
