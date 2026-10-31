import express from 'express';
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getSingleProduct,
} from '../controller/index.js';
import { authMiddleware, validateProductInput } from '../middlewares/index.js';
const router = express.Router();

router.use(authMiddleware);

router.get('/', getProducts);
router.post('/', validateProductInput, addNewProduct);
router.get('/:id', getSingleProduct);
router.post('/:id', validateProductInput, editProduct);
router.delete('/:id', deleteProduct);

export default router;
