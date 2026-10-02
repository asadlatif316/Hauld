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
            <PreviewSection />
            <ReadyToPublishSection />
          </div>
          <FormAction />
        </form>
      </div>
      <div className='bg-primary hidden lg:flex w-2/5'></div>
    </div>
  );
};

export default ProductForm;
