import { newOrder } from "../service/index.js";

const getOrders = async (req, res) => {
  res.json('get Orders');
};

const createOrder = async (req, res) => {
    const orderData = req.body
    const order = await newOrder(orderData)
  res.json('create Orders');
};

const updateOrder = async (req, res) => {
  res.json('update Orders');
};

const deleteOrder = async (req, res) => {
  res.json('delete Orders');
};

export { getOrders, createOrder, updateOrder, deleteOrder };
