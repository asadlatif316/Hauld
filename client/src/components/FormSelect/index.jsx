import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const FormSelect = ({ value, className, onChange, placeholder, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find((o) => o.value === value);

  return (
    <div className='relative w-full' ref={ref}>
      <button
        type='button'
        data-state={open ? 'open' : 'close'}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'flex h-10 w-full max-w-sm items-center justify-between gap-2 rounded-md border border-transparent bg-muted px-3 text-sm cursor-pointer transition-color',
          'data-[state=open]:bg-primary/10 data-[state=open]:border-primary/20 data-[state=open]:border-2 data-[state=open]:text-primary',
          className,
        )}
      >
        <span className={cn('truncate', !selected && 'text-muted-foreground')}>
          {selected ? selected.label : placeholder}
        </span>
      </button>
      {open && (
        <ul
          role='listbox'
          className='absolute top-full left-0 z-50 mt-1 overflow-hidden rounded-md border bg-background py-1 shadow-md'
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <li
                key={option.value}
                role='option'
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={cn(
                  'flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-muted',
                  isSelected && 'font-medium text-primary',
                )}
              >
                {option.label}
                {isSelected && <Check className='size-4' />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FormSelect;
