import { Button, TableCell, TableRow, ConfirmDialog } from '@/components';
import formatCurrency from '@/utils/formatCurrency.util';
import { Trash } from 'lucide-react';
import { formatDate } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { useOrderStore } from '@/store';
import OrderStatusDropdown from './orderStatusDropDown';
import { useState } from 'react';
const OrderRow = ({ order }) => {
  const [dialog, setDialog] = useState(null);
  const navigate = useNavigate();
  const deleteOrder = useOrderStore((s) => s.deleteOrder);
  const updateStatus = useOrderStore((s) => s.updateStatus);
  const saveStatus = useOrderStore((s) => s.saveStatus);
  const updatingId = useOrderStore((s) => s.updatingId);
  const deleting = useOrderStore((s) => s.deleting);
  const customer = order.customer;
  return (
    <TableRow>
      <TableCell className='font-medium truncate'>
        {order.orderNumber}
      </TableCell>
      <TableCell>
        <div className='flex items-center gap-4'>
          <div className='size-10 shrink-0 bg-muted rounded-full text-primary font- flex items-center justify-center uppercase'>
            {customer.name.charAt(0)}
          </div>
          <div className='min-w-0'>
            <div className='min-w-0'>
              <h3 className='text-primary font-semibold truncate capitalize'>
                {customer.name}
              </h3>
              <p className='text-xs text-muted-foreground truncate'>
                {customer.email}
              </p>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className='hidden lg:table-cell'>
        {formatDate(order.placedAt)}
      </TableCell>
      <TableCell className='hidden xl:table-cell'>
        {order.items.length}
      </TableCell>
      <TableCell className='font-semibold'>
        {formatCurrency(order.total)}
      </TableCell>
      <TableCell>
        <OrderStatusDropdown
          status={order.status}
          disabled={updatingId === order._id}
          onSelect={async (next) => {
            updateStatus(next);
            await saveStatus(order._id, next);
          }}
        />
      </TableCell>
      <TableCell className='flex w-full justify-end gap-1'>
        <Button
          onClick={() => navigate(`/dashboard/orders/${order._id}`)}
          label='View'
        />
        <Button
          className='flex-end bg-destructive hover:bg-destructive/70'
          icon={<Trash />}
          onClick={() => setDialog('delete')}
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
            const ok = await deleteOrder(order._id);
            if (ok) navigate('/orders');
            else setDialog(null);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
