import ProductToolbar from './ProductToolbar/productToolbar';
import ProductTable from './Views/productTable';
import { useProductStore } from '@/store';
import { useEffect } from 'react';

const ProductPage = () => {
  const { fetchProducts } = useProductStore();
  console.log(useProductStore.getState().products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <ProductToolbar />
      <div className='p-6'>
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductPage;
