import express from 'express';
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getSingleProduct,
} from '../controller/index.js';
import { authMiddleware } from '../middlewares/index.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', getProducts);
router.post('/', addNewProduct);
router.get('/:id', getSingleProduct);
router.post('/:id', editProduct);
router.delete('/:id', deleteProduct);

export default router;
