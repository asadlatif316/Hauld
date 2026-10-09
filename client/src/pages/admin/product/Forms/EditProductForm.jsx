import { useEffect } from 'react';
import { BasicEditSection } from '@/features/Product/Edit';
import { useProductStore } from '@/store';
import { useParams } from 'react-router-dom';

const EditProductForm = () => {
  const { id } = useParams();
  const getSingleProduct = useProductStore((s) => s.getSingleProduct);
  const isProductLoading = useProductStore((s) => s.isProductLoading);
  useEffect(() => {
    getSingleProduct(id);
  }, [id, getSingleProduct]);
  if (isProductLoading) return <p>loading</p>;
  return (
    <div>
      <BasicEditSection />
    </div>
  );
};

export default EditProductForm;
