import AdminNavbar from './adminNavbar';

const AdminSidebar = () => {
  return (
    <div className='fixed left-0 top-0 w-full h-screen md:max-w-72 flex flex-col p-2'>
      <div className='bg-sidebar h-full rounded-lg'>
        <AdminNavbar />
      </div>
    </div>
  );
};

export default AdminSidebar;
