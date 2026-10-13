import { useParams } from 'react-router-dom';
import ProductToolbar from './ProductToolbar/productToolbar';
import ProductTable from './Views/productTable';
import { useProductStore } from '@/store';
import { useEffect } from 'react';

const ProductPage = () => {
  const { search, category, isActive, isFeatured, inStock, sort, page, limit } =
    useParams();
  const filters = useProductStore((s) => s.filters);

  const { fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts,filters]);

  return (
    <div>
      <ProductToolbar />
      <div className='p-6'>
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductPage;
