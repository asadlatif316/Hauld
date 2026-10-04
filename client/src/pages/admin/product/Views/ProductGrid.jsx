import { useProductStore } from '@/store';
import { Star, Trash, SquarePen } from 'lucide-react';
import getStockStatus from '@/utils/products.utils';
import { Button } from '@/components';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import { cn } from 'cn';

const ProductGrid = () => {
  const { products, deleteProduct } = useProductStore();
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map((product) => {
        const {
          _id,
          image,
          name,
          category,
          price,
          stock,
          isActive,
          isFeatured,
        } = product;
        const stockStatus = getStockStatus(stock);
        return (
          <div
            key={_id}
            className='overflow-hidden rounded-lg border border-border bg-card'
          >
            <div className='relative'>
              {image?.url ? (
                <img
                  src={image.url}
                  alt={name}
                  className='size-full object-cover'
                />
              ) : (
                <div className='aspect-4/3 bg-muted text-muted-foreground flex justify-center items-center'>
                  <MdOutlineImageNotSupported className='size-20' />
                </div>
              )}
              <span className='absolute top-2 left-2 px-2 text-xs py-0.5 bg-card rounded-md border border-border'>
                {isActive ? 'active' : 'inactive'}
              </span>
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
              <p className='capitalize text-xs text-muted-foreground'>
                {category}
              </p>
              <div className='mt-3 flex justify-between items-center'>
                <div>
                  <p className='text-sm font-medium'>${price.toFixed(2)}</p>
                  <p
                    className={cn(
                      'text-xs',
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
                <div className='flex gap-1'>
                  <Button
                    icon={<SquarePen className='size-4' />}
                    className='px-2'
                  />
                  <Button
                    onClick={() => deleteProduct(_id)}
                    icon={<Trash className='size-4' />}
                    className='px-2'
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
