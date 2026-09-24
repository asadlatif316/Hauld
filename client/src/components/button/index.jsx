import { cn } from '@/lib/utils';

const Button = ({
  label,
  className,
  icon,
  type = 'button',
  ref,
  iconDirection = 'right',
  ...props
}) => {
  return (
    <div className='w-full sm:w-auto'>
      <button
        ref={ref}
        type={type}
        className={cn(
          'flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer px-4 py-2 font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-[0.96] border',
          className,
        )}
        {...props}
      >
        <span className='relative flex items-center gap-2 z-10'>
          {iconDirection === 'left' ? (
            <>
              {icon && icon}
              {label}
            </>
          ) : (
            <>
              {label}
              {icon && icon}
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export default Button;
