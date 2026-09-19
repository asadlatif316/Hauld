import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib';
import { useAuthStore } from '@/store';
import { BiLogOut } from 'react-icons/bi';

const UserMenu = () => {
  const { logout } = useAuthStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='cursor-pointer'>
        <div className='h-10 w-10 bg-primary rounded-full'></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40 min-w-0'>
        <DropdownMenuItem className='cursor-pointer' onClick={logout}>
          <BiLogOut className='size-4' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
