import { StatusCodes } from 'http-status-codes';
import {
  newOrder,
  fetchOrders,
  delOrder,
  changesOrder,
} from '../service/index.js';

const getOrders = async (req, res) => {
  const query = req.query;
  const { orders, totalOrders, numberOfPages, pageNumber } =
    await fetchOrders(query);
  res.json({ success: true, totalOrders, numberOfPages, pageNumber, orders });
};

const createOrder = async (req, res) => {
  const orderData = req.body;
  const order = await newOrder(orderData);
  res.status(StatusCodes.CREATED).json(order);
};

const updateOrder = async (req, res) => {
  const orderDate = req.body;
  const { id } = req.params;
  const order = await changesOrder(orderDate, id);
  res.json({ success: true, msg: 'update Orders', order });
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const product = await delOrder(id);
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: 'order deleted', product });
};

export { getOrders, createOrder, updateOrder, deleteOrder };
