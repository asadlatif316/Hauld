import { FormInput } from '@/components';
import ProductFilters from './productFilters';
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
import { IoMdAdd } from 'react-icons/io';
import { Funnel } from 'lucide-react';

const ProductToolbar = () => {
  return (
    <div>
      <div>
        <div>
          <button>
            <TbLayoutList />
          </button>
          <button>
            <TbLayoutGrid />
          </button>
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
          <button><Funnel/> Filter</button>
          <button><IoMdAdd/> Add new Project</button>
        </form>
      </div>
      <ProductFilters />
    </div>
  );
};

export default ProductToolbar;
