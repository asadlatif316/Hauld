import { AdminHeader, AdminSidebar } from '@/components';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => {
  return (
    <div className='relative h-screen'>
      <AdminSidebar />
      <div className='ml-72'>
        <AdminHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
