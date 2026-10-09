import EditProductForm from './Forms/EditProductForm';
import FormHeader from '../../../components/FormHeader/FormHeader';

const EditProductPage = () => {
  return (
    <div>
      <FormHeader text='Edit Product' />
      <EditProductForm />
    </div>
  );
};

export default EditProductPage;
