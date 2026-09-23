import express from 'express';
import { addNewProduct, deleteProduct, editProduct, getProducts } from '../controller/index.js';
import { authMiddleware } from '../middlewares/index.js';

const router = express.Router();

router.use(authMiddleware)

router.get('/', getProducts);
router.post('/', addNewProduct);
router.post('/:id', editProduct);
router.delete('/:id', deleteProduct);

export default router