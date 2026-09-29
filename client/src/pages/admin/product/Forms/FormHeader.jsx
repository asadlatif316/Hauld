import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const FormHeader = () => {
  return (
    <div className='flex gap-2 items-center'>
      <Link to='/dashboard/products'>
        <ArrowLeft />
      </Link>
      <p className='font-medium'>New Product</p>
    </div>
  );
};

export default FormHeader;
