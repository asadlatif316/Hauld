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
  { value: '', label: 'All' },
  { value: 'in', label: 'In stock' },
  { value: 'low', label: 'Low stock' },
  { value: 'out', label: 'Out of stock' },
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'low-price', label: 'Price: Low to High' },
  { value: 'high-price', label: 'Price: High to Low' },
  { value: 'a-z', label: 'Name: A-Z' },
  { value: 'z-a', label: 'Name: Z-A' },
];

export {
  SORT_OPTIONS,
  CATEGORY_OPTIONS,
  STATUS_OPTIONS,
  STOCK_OPTIONS,
  FEATURED_OPTIONS,
};
