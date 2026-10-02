import FormHeader from './FormHeader';
import {
  Basics,
  CategorySection,
  FormAction,
  ImageSection,
  PreviewSection,
  PriceStockSection,
  ReadyToPublishSection,
  Visibility,
} from './FormSections';
import { ProductPreview } from '@/components';
const ProductForm = () => {
  return (
    <div className='p-6 min-h-screen flex flex-col lg:flex-row gap-4'>
      <div className='w-full flex flex-col gap-4'>
        <FormHeader />
        <form className='flex flex-col gap-4'>
          <Basics />
          <ImageSection />
          <CategorySection />
          <PriceStockSection />
          <Visibility />
          <div className='lg:hidden flex flex-col gap-4'>
            <ProductPreview />
            <ReadyToPublishSection />
          </div>
          <FormAction />
        </form>
      </div>
      <div className='hidden lg:flex flex-col w-2/5'>
        <ProductPreview />
      </div>
    </div>
  );
};

export default ProductForm;
