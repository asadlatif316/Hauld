import express from 'express';
import { authMiddleware } from '../middlewares/index.js';
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controller/index.js';
const router = express.Router();

router.use(authMiddleware);

router.route('/').get(getOrders).post(createOrder);
router.route('/:id').patch(updateOrder).delete(deleteOrder);

export default router;
