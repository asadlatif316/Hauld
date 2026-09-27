import ProductCards from './productCard';
import ProductList from './ProductList';
import ProductGrid from './ProductGrid';
import { useUIStore } from '@/store/useUIStore';
const ProductTable = () => {
  const { view } = useUIStore();
  return (
    <div>
      <div className='hidden lg:flex'>
        {view === 'list' ? <ProductList /> : <ProductGrid />}
      </div>
      <div className='lg:hidden p-6'>
        <ProductCards />
      </div>
    </div>
  );
};

export default ProductTable;
