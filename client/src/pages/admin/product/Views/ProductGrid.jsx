import { useProductStore } from '@/store';
import { Star,Trash, SquarePen } from 'lucide-react';
import  getStockStatus  from '@/utils/products.utils';
import { Button } from '@/components';
const ProductGrid = () => {
  const { products } = useProductStore();
  return (
    <div className='grid grid-cols-2 gap-4'>
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
          <div key={_id}>
            <div>
              {image?.url ? (
                <img src={image.url} alt={name} />
              ) : (
                <div className='aspect-4/3 bg-muted'></div>
              )}
              <span>{isActive ? 'active' : 'inactive'}</span>
              {isFeatured && (
                <span>
                  <Star
                    className='size-3.5 fill-amber-400 text-amber-400'
                    aria-label='Featured'
                  />
                </span>
              )}
            </div>
            <div>
              <p>{name}</p>
              <p>{category}</p>
              <div>
                <div>
                  <p>${price.toFixed(2)}</p>
                  <p>
                    {stockStatus === 'out'
                      ? 'Out of stock'
                      : stockStatus === `${stock} low`
                        ? 'Low stock'
                        : `${stock} in stock`}
                  </p>
                </div>
                <div>
                  <Button
                    icon={<SquarePen className='size-4' />}
                    className='px-2'
                  />
                  <Button
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
