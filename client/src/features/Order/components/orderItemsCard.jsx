import { MdOutlineHideImage } from 'react-icons/md';

import { FormSectionWrapper as Card } from '@/components';
import formatCurrency from '@/utils/formatCurrency.util';
const OrderItemsCard = ({ items }) => {
  console.log(items);

  return (
    <Card className='py-4'>
      <div>
        <div className='flex justify-between border-b pb-3'>
          <h4 className='font-semibold text-primary'>Items</h4>
          <p className='text-sm text-muted-foreground'>{items.length} items</p>
        </div>
        <div className='flex flex-col gap-2 py-4'>
          {items.map((item) => (
            <div key={item.productId} className='flex gap-2'>
              {item.image ? (
                <div className='size-12 bg-muted flex items-center justify-center rounded-md'>
                  <MdOutlineHideImage />
                </div>
              ) : (
                <img src={item.image} />
              )}
              <div className='flex justify-between flex-1'>
                <div>
                  <h3 className='text-primary font-medium'>{item.name}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {formatCurrency(item.price)} x {item.qty}
                  </p>
                </div>
                <p className='text-sm text-muted-foreground'                >{formatCurrency(item.lineTotal)}</p>
              </div>
            </div>
          ))}
        </div>
        <div>prices</div>
        <div>total</div>
      </div>
    </Card>
  );
};

export default OrderItemsCard;
