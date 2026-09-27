import ProductToolbar from './productToolbar';
import ProductTable from './productTable';
import { useProductStore } from '@/store';
import { EmptyState } from '@/components';
const ProductPage = () => {
  const { products } = useProductStore();

  return (
    <div>
      <ProductToolbar />
      <div className='flex flex-col items-center'>{products.length > 0 ? <ProductTable /> : <EmptyState />}</div>
    </div>
  );
};

export default ProductPage;
