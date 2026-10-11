import {
  BasicSection,
  CategorySection,
  ImageSection,
  PriceStockSection,
  Visibility,
} from '@/features/Product/Add';

const EditProductForm = () => {
  return (
    <form className='flex flex-col gap-4 pb-3'>
      <BasicSection enableEdit={true} />
      <ImageSection />
      <CategorySection />
      <PriceStockSection />
      <Visibility />
    </form>
  );
};

export default EditProductForm;
