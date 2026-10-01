import { cn } from '@/lib/utils';

const FormSectionsWrapper = ({ children, className, heading, description }) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row gap-3 lg:gap-x-6 bg-primary-foreground px-4 py-6 border border-border rounded-xl',
        className,
      )}
    >
      <div className='w-2/6'>
        <h2 className='font-medium lg:font-bold mb-2'>{heading}</h2>
        <p className='hidden lg:block text-muted-foreground text-xs w-50'>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default FormSectionsWrapper;
