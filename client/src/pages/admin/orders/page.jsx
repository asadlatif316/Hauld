import { Pagination } from '@/components';
import { OrdersView } from '@/features';
import { useOrderStore, useProductStore } from '@/store';
import { useEffect } from 'react';
const OrderPage = () => {
  const fetchOrders = useOrderStore((s) => s.fetchOrders);
  const pagination = useOrderStore((s) => s.pagination);
  const setFilter = useProductStore((s) => s.setFilter);
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);
  return (
    <div>
      <OrdersView />
      <Pagination
        currentPage={pagination.pageNumber}
        numberOfPages={pagination.numberOfPages}
        onPageChange={(page) => setFilter('page', page)}
      />
    </div>
  );
};

export default OrderPage;
