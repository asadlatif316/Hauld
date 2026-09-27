import { Button } from '@/components';
import productImage from '@/assets/product.jpeg';
import { EllipsisVertical } from 'lucide-react';
const ProductCards = () => {
  return (
    <div>
      <img src={productImage} alt='Product' />
      <div>
        <div>
          <h3>Orange Purse</h3>
          <span>Handbags</span>
        </div>
        <div>
          <span>22$</span>
          <span>1 left</span>
        </div>
      </div>
      <div>
        <Button icon={<EllipsisVertical />} />
        <span>active</span>
      </div>
    </div>
  );
};

export default ProductCards;
