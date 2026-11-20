import {
  OrderCustomerCard,
  OrderDangerZone,
  OrderItemsCard,
  OrderNotesCard,
  OrderProgress,
  OrderDetailHeader,
} from '@/features';
import { useOrderStore } from '@/store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailPage = () => {
  const { id } = useParams();
  const fetchSingleOrder = useOrderStore((s) => s.fetchSingleOrder);
  const order = useOrderStore((s) => s.singleOrder);
  const loading = useOrderStore((s) => s.loading);

  useEffect(() => {
    fetchSingleOrder(id);
  }, [fetchSingleOrder]);
  if (loading || !order) return <div>loading test</div>;
  console.log(order);

  return (
    <div className='flex flex-col gap-4 p-6'>
      <OrderDetailHeader
        status={order.status}
        orderNumber={order.orderNumber}
        date={order.createdAt}
      />

      <div className='md:hidden'>
        <OrderProgress status={order.status} date={order.createdAt} />
      </div>

      <div className='flex flex-col gap-4 md:flex-row md:items-start'>
        <div className='flex flex-col gap-4 min-w-0 md:w-9/12'>
          <OrderItemsCard
            items={order.items}
            shipping={order.shipping}
            subtotal={order.subtotal}
            total={order.total}
          />
          <div className='hidden md:block'>
            <OrderNotesCard notes={order.notes} id={order._id} />
          </div>
        </div>

        <div className='flex flex-col gap-4 min-w-0 md:flex-1'>
          <OrderCustomerCard customer={order.customer} id={order._id} />
          <div className='hidden md:block'>
            <OrderProgress status={order.status} date={order.createdAt} />
          </div>
          <div className='md:hidden'>
            <OrderNotesCard notes={order.notes} id={order._id} />
          </div>
          <OrderDangerZone />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
