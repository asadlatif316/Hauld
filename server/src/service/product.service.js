import { ProductModel } from '../models/index.js';
import { uploadImage, deleteImage } from '../lib/index.js';

const createProduct = async (productData) => {
  const { image: base64, ...rest } = productData;
  if (!base64) {
    return await ProductModel.create(rest);
  }
  const image = await uploadImage(base64);
  try {
    const product = await ProductModel.create({ ...rest, image });
    return product;
  } catch (error) {
    await deleteImage(image.publicId);
    throw error;
  }
};

const fetchProducts = async (query) => {
  const { search, category, isActive, isFeatured, inStock, sort, page, limit } = query;
  const filter = {};

  if (search) {
    filter.$or = [{ name: { $regex: search, $options: 'i' } }];
    filter.$or = [{ description: { $regex: search, $options: 'i' } }];
  }

  if (category && category !== 'all') {
    filter.category = category;
  }

  if (isActive !== undefined) filter.isActive = isActive === 'true';
  if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';

  if (inStock === 'true') filter.stock = { $gt: 0 };
  if (inStock === 'false') filter.stock = 0;

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'name',
    'z-a': '-name',
    'high-price': '-price',
    'low-price': 'price',
    'low-stock': 'stock',
  };

  //setup pagination
  const pageNumber = Number(page) || 1;
  const pagelimit = limit || 10;
  const skip = (pageNumber - 1) * pagelimit;

  const sortKey = sortOptions[sort] || sortOptions.newest;
  const products = await ProductModel.find(filter).sort(sortKey).limit(pagelimit).skip(skip);
  const totalProducts = await ProductModel.countDocuments(filter);
  const numberOfPages = Math.ceil(totalProducts / pagelimit);
  return { products, totalProducts, pageNumber, numberOfPages };
};

export { createProduct, fetchProducts };
