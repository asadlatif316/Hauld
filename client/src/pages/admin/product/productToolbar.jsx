import { FormInput, Button, FormSelect } from '@/components';
import ProductFilters from './productFilters';
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
import { IoMdAdd } from 'react-icons/io';
import { Funnel } from 'lucide-react';
export const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All Categories' },
  { value: 'handbags', label: 'Handbags' },
  { value: 'backpacks', label: 'Backpacks' },
  { value: 'totes', label: 'Totes' },
  { value: 'wallets', label: 'Wallets' },
  { value: 'accessories', label: 'Accessories' },
];

export const STATUS_OPTIONS = [
  { value: 'all', label: 'All Status' },
  { value: 'true', label: 'Active' },
  { value: 'false', label: 'Inactive' },
];

export const FEATURED_OPTIONS = [
  { value: 'all', label: 'All Products' },
  { value: 'true', label: 'Featured' },
  { value: 'false', label: 'Not Featured' },
];

export const STOCK_OPTIONS = [
  { value: 'all', label: 'All Stock' },
  { value: 'in', label: 'In Stock' },
  { value: 'low', label: 'Low Stock' },
  { value: 'out', label: 'Out of Stock' },
];

export const SORT_OPTIONS = [
  { value: '-createdAt', label: 'Newest' },
  { value: 'createdAt', label: 'Oldest' },
  { value: 'price', label: 'Price: Low to High' },
  { value: '-price', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A–Z' },
];
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
          <FormSelect options={CATEGORY_OPTIONS} placeholder='select a Category'/>
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
