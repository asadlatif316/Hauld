import FormHeader from './FormHeader';
import {
  Basics,
  CategorySection,
  FormAction,
  ImageSection,
  PriceStockSection,
  Visibility,
} from './FormSections';
import { ProductPreview, ReadyToPublish } from '@/components';
const ProductForm = () => {
  return (
    <div className='p-6 min-h-screen flex flex-col gap-4'>
      <FormHeader />
      <div className='flex gap-4'>
        <div className='w-full flex flex-col gap-4'>
          <form className='flex flex-col gap-4'>
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
