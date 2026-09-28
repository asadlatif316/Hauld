const LOW_STOCK_THRESHOLD = 10;

const getStockStatus = (stock) => {
  if (stock === 0) return 'out';
  if (stock < LOW_STOCK_THRESHOLD) return 'low';
  return 'ok';
};

export default getStockStatus
