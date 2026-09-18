import { AdminHeader, AdminSidebar } from '@/components';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => {
  const [isOpen,setIsOpen] = useState(true)
  return (
    <div className='relative h-screen'>
      <AdminSidebar />

      {isOpen && <div className='fixed inset-0 bg-primary/50 md:hidden'>
        </div>}
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
