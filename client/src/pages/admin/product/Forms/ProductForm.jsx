import { useProductStore } from '@/store';
import FormHeader from '../../../../components/FormHeader/FormHeader';
import { useNavigate } from 'react-router-dom';
import {
  BasicSection,
  CategorySection,
  FormAction,
  ImageSection,
  PriceStockSection,
  Visibility,
} from '@/features/Product/Add';
import { ProductPreview, ReadyToPublish } from '@/components';

const ProductForm = () => {
  const navigate = useNavigate();
  const addProduct = useProductStore((s) => s.addProduct);
  const reset = useProductStore((s) => s.reset);
  const toBool = (value) => value === 'on' || value === 'true';
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set('image', useProductStore.getState().image);
    formData.delete('lowStockThreshold');
    formData.set('isActive', toBool(formData.get('isActive')));
    formData.set('isFeatured', toBool(formData.get('isFeatured')));
    console.log(Object.fromEntries(formData));
    
    const product = await addProduct(Object.fromEntries(formData));
    if (product) {
      reset();
      navigate('/dashboard/products');
    }
  };
  return (
    <div className='p-6 min-h-screen flex flex-col gap-4'>
      <FormHeader text='New Product' />
      <div className='flex gap-4'>
        <div className='w-full flex flex-col gap-4'>
          <form
            id='product-form'
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'
          >
            <BasicSection />
            <ImageSection />
            <CategorySection />
            <PriceStockSection />
            <Visibility />
            <div className='lg:hidden flex flex-col gap-4'>
              <ProductPreview />
              <ReadyToPublish />
            </div>
            <FormAction />
          </form>
        </div>
        <div className='hidden lg:flex flex-col gap-4 w-2/5'>
          <ProductPreview />
          <ReadyToPublish />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
