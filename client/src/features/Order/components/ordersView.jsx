import { useOrderStore } from '@/store';
import OrderTable from './orderTable';
import { ListSkeleton, EmptyState, Button } from '@/components';
import { orderColumns } from '../constants/column';
import { LuPackageX } from 'react-icons/lu';

const OrdersView = () => {
  const isLoading = useOrderStore((s) => s.isLoading);
  const orders = useOrderStore((s) => s.orders);
  const initialLoading = isLoading && orders.length === 0;
  if (initialLoading) {
    return <ListSkeleton columns={orderColumns}/>;
  }
  if (orders.length === 0) {
    return (
      <EmptyState
        icon={<LuPackageX />}
        title='No orders yet'
        description='Orders will shown up here once customers start buying.'
        action={<Button label='Add manual order' />}
      />
    );
  }

  return <OrderTable />;
};

export default OrdersView;
