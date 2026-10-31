import mongoose from 'mongoose';
import {PRODUCT_CATEGORY} from '../utils/index.js';
const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: Object.values(PRODUCT_CATEGORY),
      default: PRODUCT_CATEGORY.BACKPACK,
      required: true,
    },
    image: {
      url: { type: String },
      publicId: { type: String },
    },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true },
);

ProductSchema.index({ name: 'text' });
ProductSchema.index({ category: 1, createdAt: -1 });

const Product = mongoose.model('Product', ProductSchema);
export default Product;
