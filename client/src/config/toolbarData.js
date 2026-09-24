const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All Categories' },
  { value: 'handbags', label: 'Handbags' },
  { value: 'backpacks', label: 'Backpacks' },
  { value: 'totes', label: 'Totes' },
  { value: 'wallets', label: 'Wallets' },
  { value: 'accessories', label: 'Accessories' },
];

const STATUS_OPTIONS = [
  { value: 'all', label: 'All Status' },
  { value: 'true', label: 'Active' },
  { value: 'false', label: 'Inactive' },
];

const FEATURED_OPTIONS = [
  { value: 'all', label: 'All Products' },
  { value: 'true', label: 'Featured' },
  { value: 'false', label: 'Not Featured' },
];

const STOCK_OPTIONS = [
  { value: 'all', label: 'All Stock' },
  { value: 'in', label: 'In Stock' },
  { value: 'low', label: 'Low Stock' },
  { value: 'out', label: 'Out of Stock' },
];

const SORT_OPTIONS = [
  { value: '-createdAt', label: 'Newest' },
  { value: 'createdAt', label: 'Oldest' },
  { value: 'price', label: 'Price: Low to High' },
  { value: '-price', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
];

export {
  SORT_OPTIONS,
  CATEGORY_OPTIONS,
  STATUS_OPTIONS,
  STOCK_OPTIONS,
  FEATURED_OPTIONS,
};
