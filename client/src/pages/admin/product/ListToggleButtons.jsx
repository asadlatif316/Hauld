import { cn } from '@/lib/utils';
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
import { Button } from '@/components';
import { useState } from 'react';

const ListToggleButtons = () => {
  const [view, setView] = useState('list');
  return (
    <div>
      <div className='inline-flex bg-muted rounded-full  shadow-lg'>
        <Button
          aria-label='List View'
          aria-pressed={view === 'list'}
          onClick={() => setView('list')}
          icon={<TbLayoutList className='group-hover:scale-[1.05] size-4' />}
          className={cn(
            'group rounded-full border-transparent px-2 ',
            view === 'list'
              ? 'bg-primary text-primary-foreground '
              : 'hover:bg-transparent bg-transparent text-primary',
          )}
        />
        <Button
          aria-label='Grid View'
          aria-pressed={view === 'grid'}
          onClick={() => setView('grid')}
          icon={<TbLayoutGrid className='group-hover:scale-[1.05] size-4' />}
          className={cn(
            'group rounded-full border-transparent px-2 ',
            view === 'grid'
              ? 'bg-primary text-primary-foreground '
              : 'hover:bg-transparent bg-transparent text-primary',
          )}
        />
      </div>
    </div>
  );
};

export default ListToggleButtons;
