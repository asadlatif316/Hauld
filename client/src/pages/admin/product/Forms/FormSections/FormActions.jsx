import { Button } from '@/components';
import { useUIStore } from '@/store/useUIStore';
import { useNavigate } from 'react-router-dom';
const FormActions = () => {
  const reset = useUIStore((s) => s.reset);
  const navigate = useNavigate();
  const handleCancel = () => {
    reset();
    navigate(-1);
  };
  return (
    <div className='lg:hidden grid grid-cols-2 gap-3 bg-primary-foreground p-4 rounded-b-2xl border border-border'>
      <Button
        className='text-sm bg-muted-foreground hover:bg-muted-foreground/70'
        onClick={handleCancel}
        label='Cancel'
      />
      <Button label='Publish' type='submit' />
    </div>
  );
};

export default FormActions;
