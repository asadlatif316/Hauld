import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@/lib"
import { BiLogOut } from 'react-icons/bi';

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='cursor-pointer'>
        <div className='h-10 w-10 bg-primary rounded-full'></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40 min-w-0'>
        <DropdownMenuItem className='cursor-pointer'>
          <BiLogOut className="size-4"/>
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu
