import { cn } from '@/lib/utils';

const Table = ({ children, className }) => {
  return (
    <table className={cn('w-full table-fixed', className)}>{children}</table>
  );
};

export default Table;
