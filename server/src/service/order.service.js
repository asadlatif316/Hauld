import { ProductModel, OrderModel } from '../models/index.js';
import { NotFoundError, BadRequestError } from '../utils/index.js';
import { ORDER_STATUS, ORDER_STATUSES } from '../utils/index.js';

const newOrder = async (orderData) => {
  const { items, customer, shipping, notes } = orderData;
  if (!Array.isArray(items) || items.length === 0) {
    throw new BadRequestError('Order must contain at least one item');
  }
  const productIds = items.map((item) => item.productId);
  const products = await ProductModel.find({ _id: { $in: productIds } });
  const productsById = new Map();

  products.forEach((product) => {
    productsById.set(product._id.toString(), product);
  });
  const uniqueIds = new Set(productIds.map(String));
  if (productsById.size !== uniqueIds.size) {
    throw new NotFoundError('One or more products not found');
  }
  const orderItems = items.map((item) => {
    if (!Number.isInteger(item.qty) || item.qty < 1) {
      throw new BadRequestError(
        'Quantity must be a whole number of at least 1',
      );
    }
    const product = productsById.get(String(item.productId));
    if (!product) {
      throw new NotFoundError('Product not found');
    }
    if (product.stock < item.qty) {
      throw new BadRequestError(`Not enough stock for ${product.name}`);
    }
    return {
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: item.qty,
    };
  });
  const order = await OrderModel.create({
    customer,
    items: orderItems,
    shipping,
    notes,
  });
  const operations = order.items.map((item) => ({
    updateOne: {
      filter: { _id: item.productId, stock: { $gte: item.qty } },
      update: { $inc: { stock: -item.qty } },
    },
  }));

  const result = await ProductModel.bulkWrite(operations);
  if (result.modifiedCount !== order.items.length) {
    await OrderModel.findByIdAndDelete(order._id);
    throw new BadRequestError('Some items are out of stock, please try again');
  }

  return order;
};

const fetchOrders = async (query) => {
  const { search, status, sort, from, to, page, limit } = query;
  const filter = {};
  if (search) {
    filter.$or = [
      { 'customer.name': { $regex: search, $options: 'i' } },
      { orderNumber: { $regex: search, $options: 'i' } },
    ];
  }
  if (status && status !== 'all') {
    filter.status = status;
  }

  const sortOptions = {
    newest: '-placedAt -_id',
    oldest: 'placedAt _id',
    total_high: '-total -_id',
    total_low: 'total _id',
    name: 'customer.name _id',
  };

  if (from || to) {
    filter.placedAt;
    if (from) {
      const fromDate = new Date(from);
      if (isNaN(from)) {
        throw new BadRequestError('Invalid "from" date');
      }
      filter.placedAt.$gte = fromDate;
    }

    if (to) {
      const toDate = new Date(to);
      if (isNaN(to)) {
        throw new BadRequestError('Invalid "to" date');
      }
      toDate.setUTCHours(23, 59, 59, 999);
      filter.placedAt.$lte = toDate;
    }
    if (from && to && filter.placedAt.$gte > filter.placedAt.$lte) {
      throw new BadRequestError('"from" must be before "to"');
    }
  }
  const pageNumber = Number(page) || 1;
  const pagelimit = limit || 10;
  const skip = (pageNumber - 1) * pagelimit;
  const sortKey = sortOptions[sort] || sortOptions.newest;
  const orders = await OrderModel.find(filter).sort(sortKey).skip(skip);
  const totalOrders = await OrderModel.countDocuments(filter);
  const numberOfPages = Math.ceil(totalOrders / pagelimit);
  return { orders, totalOrders, pageNumber, numberOfPages };
};

const delOrder = async (id) => {
  const product = await OrderModel.findOneAndDelete(id);
  if (!product) throw new NotFoundError('product not found');
  return product;
};

const changesOrder = async (orderData, id) => {
  const { notes, status, customer } = orderData;
  const order = await OrderModel.findById(id);
  if (!order) throw new NotFoundError('not found error');
  if (['cancelled', 'delivered'].includes(order.status))
    throw new BadRequestError('Order is already cancelled or delivered');
  if (notes !== undefined) {
    order.notes = notes;
  }
  if (customer) {
    if (!['pending', 'processing'].includes(order.status))
      throw new BadRequestError('Customer details can no longer be changed');
    ['name', 'email', 'phone'].forEach((key) => {
      if (customer[key] !== undefined) {
        order.customer[key] = customer[key];
      }
    });

    if (customer.address) {
      ['line1', 'city', 'country'].forEach((key) => {
        if (customer.address[key] !== undefined) {
          order.customer.address[key] = customer.address[key];
        }
      });
    }
  }
  const allowedMoves = {
    [ORDER_STATUS.PENDING]: [ORDER_STATUS.PROCESSING, ORDER_STATUS.CANCELLED],
    [ORDER_STATUS.PROCESSING]: [ORDER_STATUS.SHIPPED, ORDER_STATUS.CANCELLED],
    [ORDER_STATUS.SHIPPED]: [ORDER_STATUS.DELIVERED],
  };
  let restoreStock = false;

  if (status !== undefined && status !== order.status) {
    if (!ORDER_STATUSES.includes(status)) {
      throw new BadRequestError('Invalid status');
    }
    if (!allowedMoves[order.status]?.includes(status)) {
      throw new BadRequestError(
        `Cannot change status from ${order.status} to ${status}`,
      );
    }
    restoreStock = status === ORDER_STATUS.CANCELLED;
    order.status = status;
  }
  order.save();
  if (restoreStock) {
    await ProductModel.bulkWrite(
      order.items.map((item) => ({
        updateOne: {
          filter: { _id: item.productId },
          update: { $inc: { stock: item.qty } },
        },
      })),
    );
  }
  return order;
};

const getOrder = async (id) => {
  const order = await OrderModel.findById(id);
  if (!order) throw new NotFoundError('order not found');
  return order;
};

export { newOrder, fetchOrders, delOrder, changesOrder, getOrder };
