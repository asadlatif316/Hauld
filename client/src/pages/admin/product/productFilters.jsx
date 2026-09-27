import { FormSelect } from '@/components';
import {
  SORT_OPTIONS,
  FEATURED_OPTIONS,
  STATUS_OPTIONS,
  STOCK_OPTIONS,
  CATEGORY_OPTIONS,
} from '@/config';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductFilters = ({ showFilters }) => {
  const [sortBy, setSortBy] = useState('-createdAt');
  const [featured, setFeatured] = useState('all');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');
  const [stock, setStock] = useState('all');
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:pt-2',
        'transition-all transition-discrete duration-300 ease-out motion-reduce:transition-none',
        'starting:opacity-0 starting:-translate-y-2',
        showFilters
          ? 'opacity-100 translate-y-0'
          : 'hidden opacity-0 -translate-y-2',
      )}
    >
      <div className='xl:hidden'>
        <FormSelect
          label='Show'
          value={featured}
          onChange={setFeatured}
          options={FEATURED_OPTIONS}
          className='rounded-full'
        />
      </div>
      <div className='xl:hidden'>
        <FormSelect
          label='Sort by'
          value={sortBy}
          onChange={setSortBy}
          options={SORT_OPTIONS}
          className='rounded-full'
        />
      </div>
      <FormSelect
        value={category}
        options={CATEGORY_OPTIONS}
        onChange={setCategory}
        label='Category'
        className='rounded-full'
      />
      <FormSelect
        value={stock}
        options={STOCK_OPTIONS}
        onChange={setStock}
        label='Stock'
        className='rounded-full'
      />
      <FormSelect
        value={status}
        options={STATUS_OPTIONS}
        onChange={setStatus}
        label='Status'
        className='rounded-full'
      />
    </div>
  );
};

export default ProductFilters;
