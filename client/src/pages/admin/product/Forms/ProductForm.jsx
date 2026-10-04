import { useProductStore } from '@/store';
import FormHeader from './FormHeader';
import { useNavigate } from 'react-router-dom';
import {
  Basics,
  CategorySection,
  FormAction,
  ImageSection,
  PriceStockSection,
  Visibility,
} from './FormSections';
import { ProductPreview, ReadyToPublish } from '@/components';
import { useUIStore } from '@/store/useUIStore';
const ProductForm = () => {
  const navigate = useNavigate();
  const addProduct = useProductStore((s) => s.addProduct);
  const reset = useUIStore((s) => s.reset);
  const toBool = (value) => value === 'on' || value === 'true';
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set('image', useUIStore.getState().image);
    formData.delete('lowStockThreshold');
    formData.set('isActive', toBool(formData.get('isActive')));
    formData.set('isFeatured', toBool(formData.get('isFeatured')));
    const product = await addProduct(Object.fromEntries(formData));
    if (product) {
      reset();
      navigate('/dashboard/products');
    }
  };
  return (
    <div className='p-6 min-h-screen flex flex-col gap-4'>
      <FormHeader />
      <div className='flex gap-4'>
        <div className='w-full flex flex-col gap-4'>
          <form
            id='product-form'
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'
          >
            <Basics />
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
