import FormHeader from './FormHeader';
import { Basics,CategorySection,ImageSection } from './FormSections';
const ProductForm = () => {
  return (
    <div className='p-6 min-h-screen flex flex-col gap-4'>
      <FormHeader />
      <form className='flex flex-col gap-4'>
        <Basics />
        <ImageSection />
        <CategorySection/>
      </form>
    </div>
  );
};

export default ProductForm;
