import AdminNavbar from './adminNavbar';

const AdminSidebar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen z-50 w-72 flex flex-col p-2'>
      <div className='py-2 bg-sidebar h-full flex flex-col space-y-2 rounded-lg'>
        <div className='flex h-14 items-center text-sidebar-foreground px-5'>
          <span className='text-2xl font-semibold tracking-tight'>Hauld</span>
        </div>
        <AdminNavbar />
      </div>
    </div>
  );
};

export default AdminSidebar;
