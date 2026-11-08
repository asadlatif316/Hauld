import { cn } from '@/lib/utils';

const TableRow = ({ children, className, ...props }) => {
  return (
    <tr className={cn('border-b border-border text-sm', className)} {...props}>
      {children}
    </tr>
  );
};

export default TableRow;
