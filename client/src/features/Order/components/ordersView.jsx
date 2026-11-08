import { useOrderStore } from '@/store';
import OrderTable from './orderTable';
import {
  ListSkeleton,
  EmptyState,
  Button,
  OrderCardSkeleton,
} from '@/components';
import { orderColumns } from '../constants/column';
import { LuPackageX } from 'react-icons/lu';
import OrderCards from './orderCards';

const OrdersView = () => {
  const isLoading = useOrderStore((s) => s.isLoading);
  const orders = useOrderStore((s) => s.orders);
  const initialLoading = isLoading && orders.length === 0;
  if (initialLoading) {
    return (
      <div>
        <ListSkeleton columns={orderColumns} />
        <OrderCardSkeleton />
      </div>
    );
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

  return (
    <div className='w-full'>
      <div className='hidden md:block'>
       <OrderTable/>
      </div>
      <div className='md:hidden'>
        <OrderCards />
      </div>
    </div>
  );
};

export default OrdersView;
