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
  return (
    <div className='flex flex-col gap-4'>
      <OrderDetailHeader
        status={order.status}
        orderNumber={order.orderNumber}
        date={order.createdAt}
      />
      <div className='md:hidden'>
        <OrderProgress />
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='w-9/12'>
          <OrderItemsCard />
          <OrderNotesCard />
        </div>
        <div className='md:flex-1'>
          <OrderCustomerCard />
          <OrderProgress />
          <OrderDangerZone />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
