import { formatDateTime } from '@/utils';
import OrderStatusBadge from './orderStatusBadge';
import { Button } from '@/components';

const OrderDetailHeader = ({ status, orderNumber, date }) => {
  return (
    <div>
      <div>
        <div>
          <h1>{orderNumber}</h1>
          <OrderStatusBadge status={status} />
        </div>
        <p>Placed {formatDateTime(date)}</p>
      </div>
      <div>
        <Button label={'Status'} />
      </div>
    </div>
  );
};

export default OrderDetailHeader;
