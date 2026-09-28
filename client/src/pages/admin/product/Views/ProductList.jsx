import { useProductStore } from '@/store';
import { ProductTableHead } from '..';
import { Button } from '@/components';
import { SquarePen, Trash } from 'lucide-react';

const ProductList = () => {
  const { products } = useProductStore();
  return (
    <table>
      <ProductTableHead />
      <tbody>
        {products.map((product) => {
          const { image, name, category, price, stock, isFeatured, isActive } =
            product;
          return (
            <tr>
              <td>
                {image?.url ? (
                  <img
                    src={image.url}
                    alt={name}
                    className='size-9 object-cover rounded-lg'
                  />
                ) : (
                  <div className='size-9 bg-muted rounded-lg'></div>
                )}{' '}
                <span>{name}</span>
              </td>
              <td className='hidden lg:table-cell'>{category}</td>
              <td>{stock}</td>
              <td>${price}</td>
              <td>{isActive ? 'active' : 'inactive'}</td>
              <td className='hidden lg:table-cell'>{isFeatured ? 'featured' : 'notFeatured'}</td>
              <td>
                <Button icon={<SquarePen />} />
                <Button icon={<Trash />} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductList;
