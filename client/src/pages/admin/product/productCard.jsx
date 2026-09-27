import { Button } from '@/components';
import productImage from '@/assets/product.jpeg';
import { EllipsisVertical } from 'lucide-react';
const ProductCards = () => {
  return (
    <div className='w-full flex gap-4 p-4 rounded-lg bg-card'>
      <img
        src={productImage}
        alt='Product'
        className='h-25 w-25 object-cover rounded-lg'
      />
      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <h3 className='font-semibold'>Orange Purse</h3>
          <span className='text-muted-foreground text-sm'>Handbags</span>
        </div>
        <div className='flex gap-3 items-baseline'>
          <span className='font-bold'>22$</span>
          <span className='text-destructive text-sm'>1 left</span>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <Button
          icon={<EllipsisVertical className='text-primary' size={20} />}
          className='bg-transparent border-none hover:bg-transparent hover'
        />
        <span className='text-sm px-2 py-1 bg-green-500/10 text-green-700 rounded-full '>
          active
        </span>
      </div>
    </div>
  );
};

export default ProductCards;
