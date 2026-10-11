import EditProductForm from './Forms/EditProductForm';
import { FormHeader, ProductPreview, ReadyToPublish } from '@/components';
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
    setMode('edit');
    getSingleProduct(id);
    return () => {
      setIsEditing(false);
      handleCancelEdit();
    };
  }, [id, getSingleProduct]);
  if (isProductLoading || !singleProduct) return <p>loading</p>;
  return (
    <div className='flex flex-col gap-4 items-center p-6 min-h-screen'>
      <FormHeader text='Edit Product' mode='edit' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <EditProductForm />
          <div className='lg:hidden flex flex-col gap-4'>
            <ProductPreview />
            <ReadyToPublish />
          </div>
        </div>
        <div className='hidden lg:flex flex-col gap-4h-full w-full'>
          <ProductPreview />
          <ReadyToPublish />
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
