import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib';
import { useAuthStore } from '@/store';
import { BiLogOut } from 'react-icons/bi';
import { PiCaretUpDownFill } from 'react-icons/pi';

const UserMenu = () => {
  const { logout } = useAuthStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='cursor-pointer'>
        <div className='flex items-center gap-x-2 md:bg-primary px-4 py-2 rounded-lg'>
          <div className='h-10 w-10 bg-primary md:bg-secondary rounded-full'></div>
          <div className='hidden md:flex flex-col text-left'>
            <h4 className='font-semibold text-primary-foreground text-sm'>
              Asad Latif
            </h4>
            <p className='text-muted text-xs'>email@email.com</p>
          </div>
          <PiCaretUpDownFill className='hidden md:block size-5 text-secondary' />
        </div>
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
