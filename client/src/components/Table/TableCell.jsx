import { cn } from '@/lib/utils';

const TableCell = ({ children, className }) => {
  return <td className={cn('p-4', className)}>{children}</td>;
};

export default TableCell;
