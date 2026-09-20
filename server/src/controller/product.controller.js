import { StatusCodes } from 'http-status-codes';
import { createProduct } from '../service/index.js';

const getProducts = async (req, res) => {
  res.json('Get Products');
};
const addNewProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    
    const product = await createProduct(productData);
    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: 'Product Created', product:product });
  } catch (error) {
    next(error);
  }
};
const editProduct = async (req, res) => {
  res.json('edit Products');
};
const deleteProduct = async (req, res) => {
  res.json('delete Products');
};

export { getProducts, addNewProduct, editProduct, deleteProduct };
