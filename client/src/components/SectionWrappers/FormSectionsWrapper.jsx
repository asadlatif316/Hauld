import { cn } from '@/lib/utils';

const FormSectionsWrapper = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row gap-3 lg:gap-x-6 bg-primary-foreground px-4 py-6 border border-border rounded-xl',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default FormSectionsWrapper;
