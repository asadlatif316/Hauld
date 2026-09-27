import ProductToolbar from './productToolbar';
import ProductTable from './productTable';
import { useProductStore } from '@/store';
const ProductPage = () => {
  const { product } = useProductStore()
  console.log(product);
  
  return (
    <div>
      <ProductToolbar />
      <ProductTable />
    </div>
  );
};

export default ProductPage;
