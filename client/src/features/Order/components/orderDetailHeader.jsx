import { canChangeStatus, formatDateTime, getNextStatus } from '@/utils';
import OrderStatusBadge from './orderStatusBadge';
import { Button } from '@/components';
import { ChevronDown } from 'lucide-react';
ChevronDown;
import ChangeStatusButton from './changeStatusButton';
import { useOrderStore } from '@/store';

const OrderDetailHeader = ({ status, orderNumber, date, id }) => {
  const updateStatus = useOrderStore((s) => s.updateStatus);
  const saveDraft = useOrderStore((s) => s.saveDraft);
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
        <Button
          className='bg-muted text-primary hover:bg-muted/70'
          label={'Print'}
        />
        <ChangeStatusButton
          status={status}
          onSelect={async (next) => {
            updateStatus(next);
            await saveDraft(id);
          }}
        />
      </div>
    </div>
  );
};

export default OrderDetailHeader;
