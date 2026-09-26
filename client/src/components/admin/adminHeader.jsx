import { useUIStore } from '@/store/useUIStore';
import { UserMenu } from '..';
import { getPageTitle } from '@/config';
import { useLocation } from 'react-router-dom';

const AdminHeader = () => {
  const { openSidebar } = useUIStore();
  const { pathname } = useLocation();
  const title = getPageTitle(pathname);

  return (
    <header className='sticky top-0 z-30 flex items-center  justify-between p-4 md:p-6'>
      <div className='flex items-center'>
        <div>
          <button
            aria-label='Toggle menu'
            onClick={openSidebar}
            className='cursor-pointer group grid size-11 place-items-center lg:hidden'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='[&_path]:origin-center [&_path]:transform-fill [&_path]:transition-transform [&_path]:duration-300'
            >
              <path
                d='M4 6h16'
                className='group-hover:translate-x-0.75 group-hover:scale-x-[0.85]'
              />
              <path
                d='M4 12h16'
                className='`group-hover:translate-x-1.25 group-hover:scale-x-[0.70]'
              />
              <path
                d='M4 18h16'
                className='group-hover:translate-x-1.75 group-hover:scale-x-[0.55]'
              />
            </svg>
          </button>
        </div>
        <h1 className='text-xl md:text-2xl text-primary font-semibold'>
          {title}
        </h1>
      </div>
      <UserMenu />
    </header>
  );
};

export default AdminHeader;
