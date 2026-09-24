import { FormInput, Button, FormSelect } from '@/components';
import ProductFilters from './productFilters';
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
import { IoMdAdd } from 'react-icons/io';
import { Funnel } from 'lucide-react';
import { useState } from 'react';
import { FEATURED_OPTIONS, SORT_OPTIONS } from '@/config';

const ProductToolbar = () => {
  const [sortBy, setSortBy] = useState('-createdAt');
  const [featured, setFeatured] = useState('All');
  return (
    <div>
      <div>
        <div>
          <Button icon={<TbLayoutList />} />
          <Button icon={<TbLayoutGrid />} />
        </div>
        <form>
          <FormInput type='text' />
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
        </form>
      </div>
      <ProductFilters />
    </div>
  );
};

export default ProductToolbar;
