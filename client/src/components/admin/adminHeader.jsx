import { useUIStore } from '@/store/useUIStore';
import { HiMenuAlt1, HiMenuAlt2 } from 'react-icons/hi';
import { UserMenu } from '..';
const AdminHeader = () => {
  const { openSidebar } = useUIStore();
  return (
      <header className='flex items-center  justify-between p-4 md:px-12 md:py-6'>
        <div>
          <button
            aria-label='Open menu'
            onClick={openSidebar}
            className='group relative md:hidden cursor-pointer'
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
        <UserMenu />
      </header>
  );
};

export default AdminHeader;
