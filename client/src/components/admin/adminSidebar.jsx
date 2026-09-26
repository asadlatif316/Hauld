import AdminNavbar from './adminNavbar';
import { PanelLeft, PanelLeftClose } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/useUIStore';

const AdminSidebar = () => {
  const {isSidebarOpen,closeSidebar} = useUIStore()
  return (
    <div
      className={cn(
        'fixed left-0 top-0 h-screen z-50 w-72 flex flex-col p-2 transition-transform ease-in-out duration-300 lg:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className='relative py-2 bg-sidebar h-full flex flex-col space-y-2 rounded-lg'>
        <div className='flex justify-between h-14 items-center text-sidebar-foreground px-5'>
          <span className='text-2xl font-semibold tracking-tight'>Hauld</span>

          <button
            aria-label='Close menu'
            className='lg:hidden cursor-pointer group relative size-11'
            onClick={closeSidebar}
          >
            <PanelLeft className='absolute inset-0 m-auto group-hover:opacity-0 transition-opacity' />
            <PanelLeftClose className='absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity' />
          </button>
        </div>
        <AdminNavbar />
      </div>
    </div>
  );
};

export default AdminSidebar;
