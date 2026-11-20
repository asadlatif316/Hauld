import { Button, FormSectionWrapper as Card } from '@/components';
import { useOrderStore } from '@/store';
import { useNavigate } from 'react-router-dom';

const CANCELLABLE = ['pending', 'processing'];

const OrderDangerZone = ({ status, id }) => {
  const canCancel = CANCELLABLE.includes(status);
  const deleteOrder = useOrderStore((s) => s.deleteOrder);
  const navigate = useNavigate();

  return (
    <Card>
      <div className='w-full'>
        {' '}
        <h4 className='text-destructive font-semibold mb-4'>Danger Zone</h4>
        <div className='space-y-4'>
          <div className='flex items-center justify-between gap-3'>
            <div>
              <p className='text-sm font-medium text-primary'>Cancel order</p>
              <p className='text-xs text-muted-foreground'>
                {canCancel
                  ? 'Stops the order and returns the stock.'
                  : `Can't be cancelled once ${status}.`}
              </p>
            </div>
            <Button label='Cancel' disabled={!canCancel} />
          </div>

          <div className='flex items-center justify-between gap-3 border-t border-border pt-4'>
            <div>
              <p className='text-sm font-medium text-primary'>Delete order</p>
              <p className='text-xs text-muted-foreground'>
                Permanently removes this order. This can't be undone.
              </p>
            </div>
            <Button
              label='Delete'
              onClick={async () => {
                const ok = await deleteOrder(id);
                if (ok) navigate('/dashboard/orders');
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderDangerZone;
