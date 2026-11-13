import { formatDateTime } from '@/utils';
import OrderStatusBadge from './orderStatusBadge';
import { Button } from '@/components';
import { ChevronDown } from 'lucide-react';
ChevronDown;

const OrderDetailHeader = ({ status, orderNumber, date }) => {
  return (
    <div className='md:flex items-start justify-between'>
      <div className=''>
        <div className='flex justify-between md:gap-4'>
          <h1 className='text-2xl text-primary font-bold truncate'>
            {orderNumber}
          </h1>
          <OrderStatusBadge status={status} />
        </div>
        <p className='text-sm text-muted-foreground'>
          Placed {formatDateTime(date)}
        </p>
      </div>
      <div className='hidden md:flex gap-1'>
        <Button label={'Print'} />
        <Button label={'Change Status'} icon={<ChevronDown className='size-4' />} />
      </div>
    </div>
  );
};

export default OrderDetailHeader;
