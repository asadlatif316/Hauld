import { Button } from '@/components';
import { useOrderStore } from '@/store';

const OrderCards = () => {
  const orders = useOrderStore((s) => s.orders);
  return (
    <div className='p-6'>
      <div className='p-4 flex flex-col gap-4 border border-border rounded-xl'>
        <div className='flex justify-between items-center border-b border-border pb-4'>
          <div>
            <h3>Order Number</h3>
            <p>date</p>
          </div>
          <p>Status</p>
        </div>
        <div className='pb-4 space-y-4 border-b border-border'>
          <div className='flex items-center gap-4'>
            <div className='size-16 bg-muted rounded-full'></div>
            <div>
              <h3>Name</h3>
              <p>email</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='size-16 bg-muted rounded-xl'></div>
            <div className='size-16 bg-muted rounded-xl'></div>
            <p>order name and list</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div>
            <p>total + items</p>
            <h3>price</h3>
          </div>
          <div className='flex gap-2'>
            <Button label='View' />
            <Button label='Status' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCards;
