import { canChangeStatus, getNextStatus } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { statusStyle, optionColors } from '../constants/orderStyles';

const OrderStatusDropdown = ({ status, onSelect, disabled }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close when clicking outside
  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const pill = `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold capitalize ${statusStyle[status]}`;

  // locked statuses: plain badge, no dropdown
  if (!canChangeStatus(status)) {
    return <span className={pill}>{status}</span>;
  }

  return (
    <div ref={ref} className='relative inline-block'>
      <button
        type='button'
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className={`${pill} disabled:opacity-60 cursor-pointer`}
      >
        {status}
        <svg
          viewBox='0 0 20 20'
          fill='currentColor'
          className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path
            d='M5.5 7.5 10 12l4.5-4.5'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {open && (
        <div className='absolute left-0 top-full z-20 mt-2 w-56 rounded-2xl border border-border bg-card p-2 shadow-xl'>
          <p className='px-3 py-2 text-xs uppercase tracking-wide text-muted-foreground'>
            Move to
          </p>
          {getNextStatus(status).map((next) => (
            <button
              key={next}
              type='button'
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                onSelect(next);
              }}
              className={`w-full rounded-xl px-3 py-3 text-left text-base font-semibold capitalize hover:bg-muted ${optionColors[next]}`}
            >
              {next}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderStatusDropdown;
