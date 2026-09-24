import {cn} from '@/lib/utils'
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
import { Button } from '@/components';
import { useState } from 'react';

const ListToggleButtons = () => {
    const [view,setView] = useState('list')
  return (
    <div>
      <div className='inline-flex bg-muted rounded-full  shadow-lg'>
        <Button
          icon={
            <TbLayoutList className='text-primary group-hover:scale-[1.05]' />
          }
          className='group rounded-full px-2 bg-transparent border-none hover:bg-transparent '
        />
        <Button icon={<TbLayoutGrid />} className='rounded-full px-2' />
      </div>
    </div>
  );
}

export default ListToggleButtons
