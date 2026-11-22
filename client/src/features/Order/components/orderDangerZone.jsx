import {
  Button,
  FormSectionWrapper as Card,
  ConfirmDialog,
} from '@/components';
import { useOrderStore } from '@/store';
import { canChangeStatus } from '@/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DELETABLE = ['cancelled', 'delivered'];

const cancelReason = {
  shipped: "Can't be cancelled, this order has already shipped.",
  delivered: "Can't be cancelled, this order was delivered.",
  cancelled: 'This order is already cancelled.',
};

const OrderDangerZone = ({ id, status }) => {
  const navigate = useNavigate();
  const [dialog, setDialog] = useState(null); // 'cancel' | 'delete' | null

  const saveStatus = useOrderStore((s) => s.saveStatus);
  const deleteOrder = useOrderStore((s) => s.deleteOrder);
  const updatingId = useOrderStore((s) => s.updatingId);
  const deleting = useOrderStore((s) => s.deleting);

  const canCancel = status === 'pending' || status === 'processing';
  const canDelete = DELETABLE.includes(status);

  return (
    <Card>
      <div>
        <h4 className='mb-4 font-semibold text-destructive'>Danger Zone</h4>

        <div className='space-y-4'>
          {/* Cancel row */}
          <div className='flex items-center justify-between gap-3'>
            <div>
              <p className='text-sm font-medium text-primary'>Cancel order</p>
              <p className='text-xs text-muted-foreground'>
                {canCancel
                  ? 'Stops the order and returns the items to stock.'
                  : cancelReason[status]}
              </p>
            </div>
            {canCancel && (
              <Button label='Cancel' onClick={() => setDialog('cancel')} />
            )}
          </div>

          {/* Delete row */}
          <div className='flex items-center justify-between gap-3 border-t border-border pt-4'>
            <div>
              <p className='text-sm font-medium text-primary'>Delete order</p>
              <p className='text-xs text-muted-foreground'>
                {canDelete
                  ? "Permanently removes this order. This can't be undone."
                  : 'Cancel the order first before deleting it.'}
              </p>
            </div>
            {canDelete && (
              <Button label='Delete' onClick={() => setDialog('delete')} />
            )}
          </div>
        </div>

        <ConfirmDialog
          open={dialog === 'cancel'}
          title='Cancel this order?'
          message="The order will be marked as cancelled and its items will be returned to stock. This can't be undone."
          confirmLabel='Cancel order'
          cancelLabel='Keep order'
          loading={updatingId === id}
          onCancel={() => setDialog(null)}
          onConfirm={async () => {
            await saveStatus(id, 'cancelled');
            setDialog(null);
          }}
        />

        <ConfirmDialog
          open={dialog === 'delete'}
          title='Delete this order?'
          message="This permanently removes the order and its record. This can't be undone."
          confirmLabel='Delete order'
          cancelLabel='Keep order'
          loading={deleting}
          onCancel={() => setDialog(null)}
          onConfirm={async () => {
            const ok = await deleteOrder(id);
            if (ok) navigate('/orders');
            else setDialog(null);
          }}
        />
      </div>
    </Card>
  );
};

export default OrderDangerZone;
