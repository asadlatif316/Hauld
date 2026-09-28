import ProductFilters from './productFilters';
import Toolbar from './Toolbar';

const ProductToolbar = () => {
  return (
    <div className='flex flex-col gap-2 p-6'>
      <Toolbar />
      <ProductFilters />
    </div>
  );
};

export default ProductToolbar;
