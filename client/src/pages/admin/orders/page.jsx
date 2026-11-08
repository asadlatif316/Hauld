import { OrdersView } from '@/features';
import { useOrderStore } from '@/store';
import { useEffect } from 'react';
const OrderPage = () => {
  const fetchOrders = useOrderStore((s) => s.fetchOrders);
  useEffect(() => {
    fetchOrders()
  }, [fetchOrders]);
  return (
    <div>
      <OrdersView />
    </div>
  );
};

export default OrderPage;
