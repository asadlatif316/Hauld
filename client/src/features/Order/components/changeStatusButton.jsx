import { useEffect, useRef, useState } from 'react';
import { optionColors } from '../constants/orderStyles';
import { Button } from '@/components';
import { canChangeStatus, getNextStatus } from '@/utils';

const ChangeStatusButton = ({ status, onSelect }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const options = getNextStatus(status);
  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  if (canChangeStatus(status))
    return (
      <div ref={ref} className='relative'>
        <Button
                label='Change status'
                className=''
          icon={
            <svg
              viewBox='0 0 20 20'
              className='size-4'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M5.5 7.5 10 12l4.5-4.5' />
            </svg>
          }
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <div className='absolute right-0 top-full z-20 mt-2 w-56 rounded-2xl border border-border bg-card p-2 shadow-xl'>
            <p className='px-3 py-2 text-xs uppercase tracking-wide text-muted-foreground'>
              Move to
            </p>
            {options.map((next) => (
              <Button
                key={next}
                label={next}
                onClick={() => {
                  setOpen(false);
                  onSelect(next);
                }}
                className={`justify-start w-full rounded-xl px-3 py-3 text-left font-semibold capitalize bg-primary-foreground border-none hover:bg-muted ${optionColors[next]}`}
              />
            ))}
          </div>
        )}
      </div>
    );
};

export default ChangeStatusButton;
