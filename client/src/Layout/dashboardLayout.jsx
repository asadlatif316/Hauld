import { AdminHeader, AdminSidebar } from '@/components';
import { useUIStore } from '@/store/useUIStore';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => {
  const { isSidebarOpen } = useUIStore();
  return (
    <div className='relative h-screen'>
      <AdminSidebar />
      {isSidebarOpen && (
        <div className='fixed z-40 inset-0 bg-primary/50 md:hidden'></div>
      )}
      <div className='md:ml-72'>
        <AdminHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
