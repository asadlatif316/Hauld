import { cn } from '@/lib/utils';

const FormInput = ({ className, type = 'text', name, label,placeholder, ...props }) => {
  return (
    <div className='flex w-full flex-col gap-1.5'>
      <label className='font-medium' htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={cn(
          'block h-9 min-w-0 rounded-md border-2 border-input bg-input/20 px-3 py-1 text-foreground outline-none transition-all duration-200 ease-in focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-30',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default FormInput;
