import FormHeader from './FormHeader';
import {
  Basics,
  CategorySection,
  ImageSection,
  PriceStockSection,
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
        </form>
      </div>
      <div className='bg-primary hidden lg:flex w-2/5'></div>
    </div>
  );
};

export default ProductForm;
