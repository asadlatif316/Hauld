import { FormSectionWrapper, Button } from '@/components';
import { useUIStore } from '@/store/useUIStore';
import { cn } from 'cn';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import getStockStatus from '@/utils/products.utils';
import { Star } from 'lucide-react';
const Section6 = () => {
  const {
    image,
    name,
    description,
    isFeatured,
    isActive,
    stock,
    price,
    category,
  } = useUIStore();
  const stockStatus = getStockStatus(stock);
  return (
    <FormSectionWrapper heading='Preview'>
      <div className='overflow-hidden rounded-lg border border-border bg-card'>
        <div className='relative'>
          {image ? (
            <img src={image} alt={name} className='aspect-4/3 object-cover' />
          ) : (
            <div className='aspect-4/3 bg-muted text-muted-foreground flex justify-center items-center'>
              <MdOutlineImageNotSupported className='size-20' />
            </div>
          )}
          {isActive && (
            <span className='absolute top-2 left-2 px-2 text-xs py-0.5 bg-card rounded-md border border-border'>
              {isActive ? 'active' : 'inactive'}
            </span>
          )}
          {isFeatured && (
            <span className='absolute top-2 right-2 size-6 grid place-items-center bg-card rounded-full'>
              <Star
                className='size-3.5 fill-amber-400 text-amber-400'
                aria-label='Featured'
              />
            </span>
          )}
        </div>
        <div className='p-4'>
          <p className='font-semibold text-sm truncate'>{name}</p>
          <p className='capitalize text-xs text-muted-foreground'>{category}</p>
          <p className='text-sm mt-1 text-muted-foreground first-letter:uppercase line-clamp-2'>
            {description || 'Product description'}
          </p>
          <div className='mt-3 flex justify-between items-center'>
            <p className='text-sm font-medium'>${price}</p>
            <p
              className={cn(
                'text-xs font-semibold',
                stockStatus === 'out' && 'text-destructive',
                stockStatus === 'low' && 'text-amber-600',
                stockStatus === 'ok' && 'text-muted-foreground',
              )}
            >
              {stockStatus === 'out'
                ? 'Out of stock'
                : stockStatus === `${stock} low`
                  ? 'Low stock'
                  : `${stock} in stock`}
            </p>
          </div>
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default Section6;
