import { useEffect } from 'react';
import { Button } from '@/components';
import { useUIStore } from '@/store/useUIStore';
import { useProductStore } from '@/store';
import { useNavigate } from 'react-router-dom';

const FormHeader = ({ text, mode = 'create' }) => {
  const navigate  = useNavigate()

  const isEditing = useProductStore((s) => s.isEditing);
  const handleEdit = useProductStore((s) => s.handleEdit  );
  const reset = useProductStore((s) => s.reset  );
  const handleCancelEdit = useProductStore((s) => s.handleCancelEdit);
  const editing = mode === 'create' || isEditing;

  const cancelCreate = () => {
    reset()
    navigate(-1)
  }


  return (
    <div className='flex gap-2 items-center justify-between'>
      <h3 className='font-medium'>{text}</h3>

      {mode === 'create' ? (
        <div className='flex gap-1'>
          <Button
            label='cancel'
            className='bg-muted-foreground hover:bg-muted-foreground/80'
            onClick={cancelCreate}
          />
          <Button label={'publish'} />
        </div>
      ) : editing ? (
        <div className='flex gap-1'>
          <Button
            label='cancel'
            className='bg-muted-foreground'
            onClick={handleCancelEdit}
          />
          <Button label={'publish'} />
        </div>
      ) : (
        <Button label='edit' onClick={handleEdit} />
      )}
    </div>
  );
};

export default FormHeader;
