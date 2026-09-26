import { FormSelect, FormInput, Button } from '@/components';
import {
  SORT_OPTIONS,
  FEATURED_OPTIONS,
  STATUS_OPTIONS,
  STOCK_OPTIONS,
  CATEGORY_OPTIONS,
} from '@/config';
import ListToggleButtons from './ListToggleButtons';
import { Funnel } from 'lucide-react';
import { IoMdAdd } from 'react-icons/io';
import { useState } from 'react';


const Toolbar = () => {
  const [sortBy, setSortBy] = useState('-createdAt');
  const [featured, setFeatured] = useState('all');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');
  const [stock, setStock] = useState('all');

  return (
    <div>
      <ListToggleButtons />
      <div className='flex flex-col justify-center space-y-2'>
        <FormInput placeholder='search product' type='text' />
        <div className='hidden md:flex gap-2'>
          <FormSelect
            value={featured}
            options={FEATURED_OPTIONS}
            onChange={setFeatured}
            label='Show'
          />
          <FormSelect
            value={sortBy}
            options={SORT_OPTIONS}
            onChange={setSortBy}
            label='Sort by'
          />
        </div>
        <div className='flex gap-2'>
          <Button
            label='Filter'
            iconDirection='left'
            icon={<Funnel size={17} />}
          className='flex-1 sm:flex-none'/>
          <Button
            aria-label='Add new Product'
            label={<span className='hidden sm:inline'>Add new product</span>}
            iconDirection='left'
            icon={<IoMdAdd size={20} />}
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-2'>
          <FormSelect
            value={featured}
            options={FEATURED_OPTIONS}
            onChange={setFeatured}
            label='Show'
            className='sm:hidden'
          />
          <FormSelect
            value={sortBy}
            options={SORT_OPTIONS}
            onChange={setSortBy}
            label='Sort by'
            className='sm:hidden'
          />
          <FormSelect
            value={category}
            options={CATEGORY_OPTIONS}
            onChange={setCategory}
            label='Category'
          />
          <FormSelect
            value={stock}
            options={STOCK_OPTIONS}
            onChange={setStock}
            label='Stock'
          />
          <FormSelect
            value={status}
            options={STATUS_OPTIONS}
            onChange={setStatus}
            label='Status'
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
