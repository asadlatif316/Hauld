import { useProductStore } from '@/store';
import { ProductTableHead } from '..';
import { Button } from '@/components';
import { SquarePen, Trash, Star } from 'lucide-react';
import getStockStatus from '@/utils/products.utils';
import { cn } from '@/lib/utils';

const ProductList = () => {
  const { products } = useProductStore();
  return (
    <table className='w-full table-fixed'>
      <ProductTableHead />
      <tbody>
        {products.map((product) => {
          const {
            _id,
            image,
            name,
            category,
            price,
            stock,
            isFeatured,
            isActive,
          } = product;
          const stockStatus = getStockStatus(stock);
          return (
            <tr key={_id} className='border-b border-border text-sm'>
              <td className='p-4'>
                <div className='flex items-center gap-3'>
                  {image?.url ? (
                    <img
                      src={image.url}
                      alt={name}
                      className='size-9 object-cover rounded-lg'
                    />
                  ) : (
                    <div className='size-9 bg-muted rounded-lg'></div>
                  )}{' '}
                  <span className='capitalize font-medium'>{name}</span>
                </div>
              </td>
              <td className='hidden lg:table-cell p-4'>{category}</td>
              <td className='p-4'>
                {stock}{' '}
                {stockStatus === 'low' && (
                  <span className=' text-yellow-600 text-sm'>low stock</span>
                )}
                {stockStatus === 'out' && (
                  <span className='text-destructive text-sm'>out of Stock</span>
                )}
              </td>
              <td className='p-4'>${price}</td>
              <td className='p-4'>
                <span
                  className={cn(
                    'px-3 py-2 rounded-full font-medium',
                    isActive
                      ? 'bg-green-500/10 text-green-700'
                      : 'text-destructive bg-destructive/10',
                  )}
                >
                  {isActive ? 'active' : 'inactive'}
                </span>
              </td>
              <td className='hidden p-4 text-center xl:table-cell'>
                <Star
                  className={`mx-auto size-4 ${
                    isFeatured
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-muted-foreground/40'
                  }`}
                  aria-label={isFeatured ? 'Featured' : 'Not featured'}
                />
              </td>
              <td className='p-4'>
                <div className='flex gap-1 justify-end'>
                  <Button
                    icon={<SquarePen className='size-4' />}
                    className='px-2'
                  />
                  <Button
                    icon={<Trash className='size-4' />}
                    className='px-2'
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductList;
