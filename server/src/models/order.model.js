import mongoose from 'mongoose';
import { ORDER_STATUS } from '../utils/index.js';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true },
  address: {
    line1: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    country: { type: String, trim: true, default: 'Pakistan' },
  },
});

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: String },
  qty: { type: Number, required: true, min: 1 },
  lineTotal: { type: Number, min: 0 }, // price * qty, set automatically
});


