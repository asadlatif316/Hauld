import { Button } from '@/components';
import { useOrderStore } from '@/store';
import { formatDateTime } from '@/utils';
import OrderStatusBadge from './orderStatusBadge';
import formatCurrency from '@/utils/formatCurrency.util';
const OrderCards = () => {
  const orders = useOrderStore((s) => s.orders);
  return (
    <div className='p-6'>
      {orders.map((order) => {
        const customer = order.customer;
        const items = order.items;
        const shown = items.slice(0, 2);
        const extra = items.length - shown.length;
        const [first, ...rest] = order.items;
        const summary = `${first.name}${first.quantity > 1 ? ` x${first.quantity}` : ''}${
          rest.length > 0 ? `, +${rest.length} more` : ''
        }`;

        return (
          <div
            key={order._id}
            className='p-4 flex flex-col gap-4 border border-border rounded-xl bg-card'
          >
            <div className='flex justify-between items-start border-b border-border pb-4'>
              <div>
                <h3 className='font-semibold text-lg text-primary truncate'>
                  {order.orderNumber}
                </h3>
                <p className='text-xs text-muted-foreground'>
                  {formatDateTime(order.createdAt)}
                </p>
              </div>
              <p>
                <OrderStatusBadge status={order.status} />
              </p>
            </div>
            <div className='pb-4 space-y-4 border-b border-border'>
              <div className='flex items-center gap-4'>
                <div className='size-12 bg-muted rounded-full shrink-0 flex items-center justify-center text-primary font-semibold uppercase'>
                  {customer.name.charAt(0)}
                </div>
                <div className='min-w-0'>
                  <h3 className='text-primary font-semibold truncate capitalize'>
                    {customer.name}
                  </h3>
                  <p className='text-xs text-muted-foreground truncate'>
                    {customer.email}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                {shown.map((item, i) => (
                  <div
                    key={i}
                    className='size-12 shrink-0 rounded-xl bg-muted overflow-hidden'
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className='size-full object-cover'
                      />
                    )}
                  </div>
                ))}
                {extra > 0 && (
                  <div className='size-12 shrink-0 rounded-xl bg-muted flex items-center justify-center text-xs font-medium text-primary'>
                    +{extra}
                  </div>
                )}

                <p className='text-sm text-muted-foreground truncate'>
                  {summary}
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-xs text-muted-foreground'>
                  {items.length} items
                </p>
                <h3 className='text-lg font-semibold text-primary'>
                  {formatCurrency(order.total)}
                </h3>
              </div>
              <div className='flex gap-2'>
                <Button label='View' />
                <Button label='Status' />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderCards;
