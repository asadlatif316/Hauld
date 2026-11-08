import { useOrderStore } from '@/store';
import OrderTable from './orderTable';
import { ListSkeleton } from '@/components';
import { orderColumns } from '../constants/column';

const OrdersView = () => {
  const isLoading = useOrderStore((s) => s.isLoading);
  const orders = useOrderStore((s) => s.orders);
  const initialLoading = isLoading && orders.length === 0;
  if (initialLoading) {
    return <ListSkeleton columns={orderColumns}/>;
  }

  return <OrderTable />;
};

export default OrdersView;
