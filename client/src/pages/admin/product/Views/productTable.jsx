import ProductCards from './productCard';
import ProductList from './ProductList';
import ProductGrid from './ProductGrid';
import { useProductStore } from '@/store';
import { LuPackageX } from 'react-icons/lu';

import {
  GridSkeleton,
  CardSkeleton,
  ListSkeleton,
  EmptyState,
  Button,
} from '@/components';
import { useUIStore } from '@/store/useUIStore';

const ProductTable = () => {
  const { products, isProductLoading } = useProductStore();
  const { view } = useUIStore()
  const isInitialLoading = isProductLoading && products.length === 0;
  const isRefetching = isProductLoading && products.length > 0;
  if (true) {
    return (
      <div className='w-full'>
        <div className='hidden md:block'>
          {view === 'list' ? <ListSkeleton /> : <GridSkeleton />}
        </div>
        <div className='md:hidden'>
          <CardSkeleton />
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyState
        icon={<LuPackageX/>}
        title='No products yet'
        description='Add your first product to start building your catalog.'
        action={<Button label='Add product' />}
      />
    );
  }

  return (
    <div className='w-full'>
      <div className='hidden md:block'>
        {view === 'list' ? <ProductList /> : <ProductGrid />}
      </div>
      <div className='md:hidden'>
        <ProductCards />
      </div>
    </div>
  );
};

export default ProductTable;
