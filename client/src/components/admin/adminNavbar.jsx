import { navItems } from '@/config/nav';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/useUIStore';

const AdminNavbar = () => {
  const closeSidebar = useUIStore((s) => s.closeSidebar);
  return (
    <div className='text-sidebar-foreground flex flex-col space-y-3 p-4'>
      {navItems.map((item) => (
        <NavLink
          to={item.to}
          key={item.to}
          end={item.end}
          onClick={closeSidebar}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-x-2 rounded-md text-sm px-3 py-2 font-medium transition-color duration-200',
              isActive
                ? 'bg-sidebar-accent text-primary-foreground'
                : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-accent-foreground',
            )
          }
        >
          <item.icon className='size-5 shrink-0' />
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default AdminNavbar;
