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

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, unique: true, index: true }, // e.g. ORD-2026-0148
    customer: { type: customerSchema, required: true },
    items: {
      type: [orderItemSchema],
      validate: [
        (v) => Array.isArray(v) && v.length >= 1,
        'Order needs at least one item',
      ],
    },
    subtotal: { type: Number, min: 0 },
    shipping: { type: Number, default: 0, min: 0 },
    total: { type: Number, min: 0 },
    status: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      default: 'pending',
      index: true,
    },
    notes: { type: String, trim: true },
    placedAt: { type: Date, default: Date.now, index: -1 }, // separate from createdAt so seed data can backdate
  },
  { timestamps: true },
);

orderSchema.index({ 'customer.email': 1 });
orderSchema.index({ 'customer.name': 1 });

