import { Button } from '@/components';
import productImage from '@/assets/product.jpeg';
import { EllipsisVertical, ImageOff } from 'lucide-react';
import { useProductStore } from '@/store';
import { cn } from '@/lib/utils';
import { MdFeaturedPlayList } from 'react-icons/md';

const ProductCards = () => {
  const { products } = useProductStore();

  return (
    <div className='flex flex-col gap-4'>
      {products.map((product) => {
        const { name, image, category, isActive, stock, price, isFeatured } =
          product;
        return (
          <div
            key={product._id}
            className='w-full flex gap-4 p-4 rounded-lg bg-card'
          >
            <div className='relative shrink-0'>
              {image?.url ? (
                <img
                  src={image.url}
                  alt='Product'
                  className='h-25 w-25 object-cover rounded-lg'
                />
              ) : (
                <div className='h-25 w-25 object-cover text-muted-foreground flex justify-center items-center rounded-lg bg-muted'>
                  <ImageOff className='size-6' />
                </div>
              )}
              {isFeatured && (
                <MdFeaturedPlayList className='absolute top-1.5 left-1.5 fill-amber-400 text-amber-400 size-5' />
              )}
            </div>
            <div className='flex-1 flex flex-col justify-between'>
              <div>
                <h3 className='font-semibold'>{name}</h3>
                <span className='text-muted-foreground text-sm'>
                  {category}
                </span>
              </div>
              <div className='flex gap-3 items-baseline'>
                <span className='font-bold'>${price}</span>
                {stock === 0 ? (
                  <span className='text-destructive text-sm'>out of stock</span>
                ) : stock > 0 && stock <= 10 ? (
                  <span className='text-orange-400 text-sm'>{stock} left</span>
                ) : (
                  <span className='text-muted-foreground text-sm'>
                    {stock} in stock
                  </span>
                )}
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <Button
                icon={<EllipsisVertical className='text-primary' size={20} />}
                className='bg-transparent border-none hover:bg-transparent hover'
              />
              <span
                className={cn(
                  'text-sm px-2 py-1 rounded-full ',
                  isActive
                    ? 'bg-green-500/10 text-green-700'
                    : 'bg-destructive/20 text-destructive',
                )}
              >
                {isActive ? 'active' : 'inactive'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
