import { useUIStore } from '@/store/useUIStore';
import { HiMenuAlt1, HiMenuAlt2 } from 'react-icons/hi';

const AdminHeader = () => {
  const { openSidebar } = useUIStore();
  return (
    <div>
      <button
        aria-label='Open menu'
        onClick={openSidebar}
        className='group relative size-13 md:hidden cursor-pointer'
      >
        <HiMenuAlt1
          className='absolute inset-0 m-auto transition-transform duration-200 group-hover:scale-0'
          size={26}
        />
        <HiMenuAlt2
          className='absolute inset-0 m-auto scale-0 transition-transform duration-200 group-hover:scale-100'
          size={26}
        />
      </button>
    </div>
  );
};

export default AdminHeader;
