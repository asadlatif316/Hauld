import { formatDateTime } from '@/utils';
import OrderStatusBadge from './orderStatusBadge';
import { Button } from '@/components';

const OrderDetailHeader = ({ status, orderNumber, date }) => {
  return (
    <div className='md:flex items-center justify-between'>
      <div className=''>
        <div className='flex justify-between'>
          <h1 className='text-2xl text-primary font-bold truncate'>{orderNumber}</h1>
          <OrderStatusBadge status={status} />
        </div>
        <p className='text-sm text-muted-foreground'>Placed {formatDateTime(date)}</p>
      </div>
      <div className='hidden md:flex'>
        <Button label={'Print'} />
        <Button label={'Status'} />
      </div>
    </div>
  );
};

export default OrderDetailHeader;
