import { cn } from '@/lib/utils';

const Button = ({ children, className, type = 'button', ...props }) => {
  return (
    <div className='w-full sm:w-auto'>
      <button
        type={type}
        className={cn(
          'flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer px-4 py-2 font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-[0.96] border',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
