import ProductToolbar from './productToolbar';
import ProductTable from './productTable';
import { useProductStore } from '@/store';
import { Button, EmptyState } from '@/components';
import { LuPackageX } from "react-icons/lu";

const ProductPage = () => {
  const { products } = useProductStore();

  return (
    <div>
      <ProductToolbar />
      <div className='flex flex-col items-center'>
        {products.length > 0 ? (
          <ProductTable />
        ) : (
          <EmptyState
            icon={<LuPackageX />}
            title='No Products yet'
            description='Add your first product to start building your catalog.'
            action={<Button label='Add prdouct' className='text-sm'/>}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
