import { StatusCodes } from "http-status-codes";
import { newOrder,fetchOrders } from "../service/index.js";
import Product from "../models/product.model.js";

const getOrders = async (req, res) => {
    const orders = await fetchOrders()
  res.json({success:true, orders});
};

const createOrder = async (req, res) => {
    const orderData = req.body
    const order = await newOrder(orderData)
  res.status(StatusCodes.CREATED).json(order);
};

const updateOrder = async (req, res) => {
  res.json('update Orders');
};

const deleteOrder = async (req, res) => {
  res.json('delete Orders');
};

export { getOrders, createOrder, updateOrder, deleteOrder };
