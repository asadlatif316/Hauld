
import { useProductStore } from '@/store';
import ProductCard from './productCard';

const ProductCards = () => {
  const { products } = useProductStore();
  return (
    <div className='flex flex-col gap-4'>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
