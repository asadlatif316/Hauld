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
import { useProductStore } from '@/store';

const ProductFilters = ({ showFilters }) => {
  const [sortBy, setSortBy] = useState('-createdAt');
  const [featured, setFeatured] = useState('all');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');
  const [stock, setStock] = useState('all');
  const filters = useProductStore((s)=> s.filters)
  const setFilter = useProductStore((s)=> s.setFilter)
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
          value={filters.isFeatured}
          onChange={(value) => setFilter('isFeatured', value)}
          options={FEATURED_OPTIONS}
          className='rounded-full'
        />
      </div>
      <div className='xl:hidden'>
        <FormSelect
          label='Sort by'
          value={filters.sort}
          onChange={(value) => setFilter('sort', value)}
          options={SORT_OPTIONS}
          className='rounded-full'
        />
      </div>
      <FormSelect
        value={filters.category}
        options={CATEGORY_OPTIONS}
        onChange={(value) => setFilter('category', value)}
        label='Category'
        className='rounded-full'
      />
      <FormSelect
        value={filters.stock}
        options={STOCK_OPTIONS}
        onChange={(value) => setFilter(value)}
        label='Stock'
        className='rounded-full'
      />
      <FormSelect
        value={filters.isActive}
        options={STATUS_OPTIONS}
        onChange={(value) => setFilter('isActive', value)}
        label='Status'
        className='rounded-full'
      />
    </div>
  );
};

export default ProductFilters;
