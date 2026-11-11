import {
  OrderCustomerCard,
  OrderDangerZone,
  OrderDetailHeader,
  OrderItemsCard,
  OrderNotesCard,
  OrderProgress,
} from '@/features';
import { useOrderStore } from '@/store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailPage = () => {
  const {id} = useParams()
  const fetchSingleOrder = useOrderStore((s) => s.fetchSingleOrder);
  useEffect(() => {
    fetchSingleOrder(id)
  },[fetchSingleOrder])
  return (
    <div className='flex flex-col gap-4'>
      <OrderDetailHeader />
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
