import EditProductForm from './Forms/EditProductForm';
import { FormHeader } from '@/components';
import { useParams } from 'react-router-dom';
import { useProductStore } from '@/store';
import { useEffect } from 'react';
const EditProductPage = () => {
  const { id } = useParams();
  const getSingleProduct = useProductStore((s) => s.getSingleProduct);
  const singleProduct = useProductStore((s) => s.singleProduct);
  const setMode = useProductStore((s) => s.setMode);
  const setIsEditing = useProductStore((s) => s.setIsEditing);
  const isProductLoading = useProductStore((s) => s.isProductLoading);
  const handleCancelEdit = useProductStore((s) => s.handleCancelEdit);
  useEffect(() => {
    setMode('edit')
    getSingleProduct(id);
    return () => {
      setIsEditing(false)
      handleCancelEdit()
    }
  }, [id, getSingleProduct]);
  if (isProductLoading || !singleProduct) return <p>loading</p>;
  return (
    <div>
      <FormHeader text='Edit Product' mode='edit' />
      <EditProductForm />
    </div>
  );
};

export default EditProductPage;
