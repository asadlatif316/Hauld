import { Button, TableCell, TableRow } from '@/components';
import formatCurrency from '@/utils/formatCurrency.util';
import OrderStatusBadge from './orderStatusBadge';
import { Trash } from 'lucide-react';
import { formatDate } from '@/utils';
import { useNavigate } from 'react-router-dom';
const OrderRow = ({ order }) => {
  const navigate = useNavigate();
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
        <OrderStatusBadge status={order.status} />
      </TableCell>
      <TableCell className='flex w-full justify-end gap-1'>
        <Button
          onClick={() => navigate(`/dashboard/orders/${order._id}`)}
          label='View'
        />
        <Button className='flex-end bg-destructive' icon={<Trash />} />
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
