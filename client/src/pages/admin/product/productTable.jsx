import ProductCards from './productCard';
import ProductList from './ProductList';
import ProductGrid from './ProductGrid';
import { useUIStore } from '@/store/useUIStore';
const ProductTable = () => {
  const { view } = useUIStore();
  return (
    <div className='w-full'>
      <div className='hidden lg:flex'>
        {view === 'list' ? <ProductList /> : <ProductGrid />}
      </div>
      <div className='lg:hidden'>
        <ProductCards />
      </div>
    </div>
  );
};

export default ProductTable;
