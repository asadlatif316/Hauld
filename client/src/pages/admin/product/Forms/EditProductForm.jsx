import { BasicSection, ImageSection } from '@/features/Product/Add';

const EditProductForm = () => {
  return (
    <div>
      <BasicSection enableEdit={true} />
      <ImageSection/>
    </div>
  );
};

export default EditProductForm;
