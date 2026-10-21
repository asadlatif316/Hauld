import ProductToolbar from './ProductToolbar/productToolbar';
import ProductTable from './Views/productTable';
import { useProductStore } from '@/store';
import { useEffect } from 'react';

const ProductPage = () => {
  const filters = useProductStore((s) => s.filters);
  const resetFilters = useProductStore((s) => s.resetFilters);
  const fetchProducts = useProductStore((s) => s.fetchProducts);
  const pagination = useProductStore((s) => s.pagination);
  
  useEffect(() => {
    fetchProducts();
    return () => {
      resetFilters();
    };
  }, [fetchProducts, filters]);

  return (
    <div>
      <ProductToolbar />
      <div className='p-6'>
        <h3 className='text-xl mb-4 text-muted-foreground capitalize'>{pagination.totalProducts} products found</h3>
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductPage;
