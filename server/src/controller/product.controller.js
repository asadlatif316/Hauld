import { StatusCodes } from 'http-status-codes';
import {
  createProduct,
  fetchProducts,
  updateProduct,
} from '../service/index.js';

const getProducts = async (req, res, next) => {
  const query = req.query;
  try {
    const { products, totalProducts, numberOfPages, pageNumber } =
      await fetchProducts(query);
    console.log(products);

    res.status(StatusCodes.OK).json({
      totalProducts,
      numberOfPages,
      currentPage: pageNumber,
      products,
    });
  } catch (error) {
    next(error);
  }
};
const addNewProduct = async (req, res, next) => {
  try {
    const productData = req.body;

    const product = await createProduct(productData);
    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: 'Product Created', product: product });
  } catch (error) {
    next(error);
  }
};
const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await updateProduct(id, req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Product modified',
      product: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res) => {
  res.json('delete Products');
};

export { getProducts, addNewProduct, editProduct, deleteProduct };
