import { Table, TableBody, TableHeader } from '@/components';
import { orderColumns } from '../constants/column';
import { useOrderStore } from '@/store';
import OrderRow from './orderRow';
const OrderTable = () => {
  const orders = useOrderStore((s) => s.orders);
  return (
    <Table>
      <TableHeader columns={orderColumns} />
      <TableBody>
        {orders.map((order) => (
          <OrderRow key={order._id} order={order} />
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
