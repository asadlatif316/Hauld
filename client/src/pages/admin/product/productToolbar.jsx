import { FormInput } from '@/components';
import ProductFilters from './productFilters';
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
import { IoMdAdd } from 'react-icons/io';
import { Funnel } from 'lucide-react';
import { Button } from '@/components';

const ProductToolbar = () => {
  return (
    <div>
      <div>
        <div>
          <Button icon={<TbLayoutList />} />
          <Button icon={<TbLayoutGrid />} />
        </div>
        <form>
          <FormInput type='text' />
          <select name='' id=''>
            <option value=''>show</option>
            <option value=''>All</option>
            <option value=''>Active</option>
            <option value=''>Inactive</option>
          </select>
          <select name='' id=''>
            <option value=''>show</option>
            <option value=''>All</option>
            <option value=''>Active</option>
            <option value=''>Inactive</option>
          </select>
          <Button
            label='Filter'
            iconDirection='left'
            icon={<Funnel size={17} />}
          />
          <Button label='Add new Product' iconDirection='left' icon={<IoMdAdd size={20}/>} />
        </form>
      </div>
      <ProductFilters />
    </div>
  );
};

export default ProductToolbar;
