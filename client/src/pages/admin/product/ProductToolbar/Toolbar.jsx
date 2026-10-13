import { FormSelect, FormInput, Button } from '@/components';
import { SORT_OPTIONS, FEATURED_OPTIONS } from '@/config';
import ListToggleButtons from './ListToggleButtons';
import { Funnel } from 'lucide-react';
import { IoMdAdd } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductFilters from './productFilters';
import { useProductStore } from '@/store';

const Toolbar = () => {
  const [sortBy, setSortBy] = useState('-createdAt');
  const [featured, setFeatured] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate()
  
  const filters = useProductStore((s) => s.filters);
  const setFilter = useProductStore((s) => s.setFilter);

  return (
    <div>
      <div className='bg-white p-4 rounded-lg flex flex-col justify-center gap-2 shadow-sm'>
        <div className='flex flex-col md:flex-row md:items-center gap-4 border-b-2 pb-4'>
          <ListToggleButtons />
          <FormInput placeholder='search product' type='text' />
          <div className='hidden xl:flex gap-2'>
            <FormSelect
              value={filters.isFeatured}
              options={FEATURED_OPTIONS}
              onChange={(value) => setFilter('isFeatured', value)}
              label='Show'
              className='w-32 rounded-full'
            />
            <FormSelect
              value={filters.sort}
              options={SORT_OPTIONS}
              onChange={(value) => setFilter('sort', value)}
              label='Sort by'
              className='w-32 rounded-full'
            />
          </div>
          <div className='flex gap-2'>
            <Button
              label='Filter'
              iconDirection='left'
              onClick={() => setShowFilters((prev) => !prev)}
              icon={<Funnel size={17} />}
              className='flex-1 md:flex-none'
            />
            <Button
              aria-label='Add new Product'
              label={<span className='hidden lg:inline'>Add new product</span>}
              iconDirection='left'
              icon={<IoMdAdd size={20} />}
              onClick={() => navigate('/dashboard/products/new')}
            />
          </div>
        </div>

        {showFilters && <ProductFilters showFilters={showFilters} />}
      </div>
    </div>
  );
};

export default Toolbar;
