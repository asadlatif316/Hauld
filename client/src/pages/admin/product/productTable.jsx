import ProductCards from './productCard';
import ProductList from './ProductList';
import ProductGrid from './ProductGrid';
import { useUIStore } from '@/store/useUIStore';
const ProductTable = () => {
  const { products, view, isProductLoading } = useUIStore();
  const isInitialLoading = isProductLoading && products.length === 0;
  const isRefetching = isProductLoading && products.length > 0;
  return (
    <div className='w-full'>
      <div className='hidden md:block'>
        {isInitialLoading ? (
          view === 'list' ? (
            <ListSkeleton />
          ) : (
            <GridSkeleton />
          )
        ) : view === 'list' ? (
          <ProductList />
        ) : (
          <ProductGrid />
        )}
      </div>
      <div className='md:hidden'>
        {isInitialLoading ? <CardsSkeleton /> : <ProductCards />}
      </div>
    </div>
  );
};

export default ProductTable;
