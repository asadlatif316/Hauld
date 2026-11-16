import { Button, FormSectionWrapper as Card } from '@/components';

const CANCELLABLE = ['pending', 'processing'];

const OrderDangerZone = ({ status }) => {
  const canCancel = CANCELLABLE.includes(status);

  return (
    <Card>
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
          <Button label='Delete' />
        </div>
      </div>
    </Card>
  );
};

export default OrderDangerZone;
