import ProductToolbar from './productToolbar';
import ProductTable from './productTable';
import { useProductStore } from '@/store';
import { Button, EmptyState, Skeleton } from '@/components';
import { LuPackageX } from 'react-icons/lu';
import { useEffect } from 'react';

const ProductPage = () => {
  const { products, isProductLoading, fetchProducts } = useProductStore();
console.log(useProductStore.getState().products);  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  return (
    <div>
      <ProductToolbar />
      <div className='flex p-6 flex-col items-center'>
        {products.length > 0 ? (
          <ProductTable />
        ) : isProductLoading ? (
          <Skeleton />
        ) : (
          <EmptyState
            icon={<LuPackageX />}
            title='No Products yet'
            description='Add your first product to start building your catalog.'
            action={<Button label='Add product' className='text-sm' />}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
