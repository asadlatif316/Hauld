import { Button } from '@/components';
import { useUIStore } from '@/store/useUIStore';
import { useNavigate } from 'react-router-dom';
const FormHeader = () => {
  const navigate = useNavigate();
  const reset = useUIStore((s) => s.reset);
  const handleCancel = () => {
    reset();
    navigate(-1);
  };
  return (
    <div className='flex gap-2 items-center justify-between'>
      <div className='font-medium'>
        <p className='font-medium'>New Product</p>
      </div>
      <div className='flex items-center gap-2'>
        <Button
          className='text-muted-foreground bg-card hover:bg-card'
          label='Cancel'
          onClick={handleCancel}
        />
        <Button type='submit' form='product-form' label='Publish' />
      </div>
    </div>
  );
};

export default FormHeader;
