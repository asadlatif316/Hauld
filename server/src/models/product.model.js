import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: {
    enum: ['backpack', 'tote', 'duffel', 'crossBody', 'wallet', 'laptop-bag'],
    required: true,
  },
  imageURL: { type: String, required: true },
  isFeatured: { type: Boolean, required: true },
  isActive: { type: Boolean, required: true },
  stock: { type: Number, required: true },
});

const Product = mongoose.model.Product || mongoose.model('Product', ProductSchema);
export default Product;
