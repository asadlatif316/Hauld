import { useEffect } from 'react';
import ProductForm from './Forms/ProductForm';
import { useProductStore } from '@/store';

const ProductCreatePage = () => {
  const setMode = useProductStore((s) => s.setMode);
  const reset = useProductStore((s) => s.reset);
  useEffect(() => {
    setMode('create');
    reset();
  }, []);

  return (
    <div>
      <ProductForm />
    </div>
  );
};

export default ProductCreatePage;
