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
      <div className='flex flex-col justify-center gap-2'>
        <div className='flex flex-col md:flex-row md:items-center gap-4'>
          <ListToggleButtons />
          <FormInput placeholder='search product' type='text' />
          <div className='hidden xl:flex gap-2'>
            <FormSelect
              value={featured}
              options={FEATURED_OPTIONS}
              onChange={setFeatured}
              label='Show'
              className='w-32'
            />
            <FormSelect
              value={sortBy}
              options={SORT_OPTIONS}
              onChange={setSortBy}
              label='Sort by'
              className='w-32'
            />
          </div>
          <div className='flex gap-2'>
            <Button
              label='Filter'
              iconDirection='left'
              icon={<Funnel size={17} />}
              className='flex-1 md:flex-none'
            />
            <Button
              aria-label='Add new Product'
              label={<span className='hidden lg:inline'>Add new product</span>}
              iconDirection='left'
              icon={<IoMdAdd size={20} />}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
          <div className='xl:hidden'>
            <FormSelect
              label='Show'
              value={featured}
              onChange={setFeatured}
              options={FEATURED_OPTIONS}
            />
          </div>
          <div className='xl:hidden'>
            <FormSelect
              label='Sort by'
              value={sortBy}
              onChange={setSortBy}
              options={SORT_OPTIONS}
            />
          </div>
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
