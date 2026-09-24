import { FormSelect, FormInput, Button } from '@/components';
import {
  SORT_OPTIONS,
  FEATURED_OPTIONS,
  STATUS_OPTIONS,
  STOCK_OPTIONS,
  CATEGORY_OPTIONS,
} from '@/config';
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
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
      <div>
        <Button icon={<TbLayoutList />} />
        <Button icon={<TbLayoutGrid />} />
      </div>
      <form>
        <FormInput type='text' />
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
        <Button
          label='Filter'
          iconDirection='left'
          icon={<Funnel size={17} />}
        />
        <Button
          label='Add new Product'
          iconDirection='left'
          icon={<IoMdAdd size={20} />}
        />

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
      </form>
    </div>
  );
};

export default Toolbar;
