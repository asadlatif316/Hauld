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
        <OrderProgress />
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-9/12'>
          <OrderItemsCard
            items={order.items}
            shipping={order.shipping}
            subtotal={order.subtotal}
            total={order.total}
          />
          <OrderNotesCard />
        </div>
        <div className='md:flex-1'>
          <OrderCustomerCard customer={order.customer} />
          <OrderProgress />
          <OrderDangerZone />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
