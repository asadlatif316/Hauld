import { Button } from '@/components';
import {
  EllipsisVertical,
  ImageOff,
  Star,
  SquarePen,
  Trash,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useProductStore } from '@/store';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const { _id, image, name, category, price, stock, isActive, isFeatured } =
        product;
    const navigate = useNavigate()
    const deleteProduct = useProductStore((s)=>s.deleteProduct)
  return (
    <div>
      <div
        key={_id}
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
            <Star className='absolute top-1.5 left-1.5 fill-amber-400 text-amber-400 size-5' />
          )}
        </div>
        <div className='flex-1 flex flex-col justify-between'>
          <div>
            <h3 className='font-semibold'>{name}</h3>
            <span className='text-muted-foreground text-sm'>{category}</span>
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
        <div className='flex flex-col justify-between items-end shrink-0'>
          {open ? (
            <div className='flex flex-row-reverse gap-1'>
              <Button
                onClick={() => setOpen(false)}
                icon={<X className='size-4' />}
                className='px-2 bg-transparent text-primary hover:bg-muted'
              />
              <Button
                onClick={() => {
                  navigate(`/dashboard/products/${_id}/edit`);
                }}
                icon={<SquarePen className='size-4' />}
                className='px-2'
              />
              <Button
                onClick={() => deleteProduct(_id)}
                icon={<Trash className='size-4' />}
                className='px- bg-destructive hover:bg-red-800'
              />
            </div>
          ) : (
            <Button
              onClick={() => setOpen(true)}
              icon={<EllipsisVertical className='text-primary' size={20} />}
              className='bg-transparent border-none hover:bg-transparent'
            />
          )}
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
    </div>
  );
};

export default ProductCard;
