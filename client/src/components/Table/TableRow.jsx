import { cn } from 'cn';

const TableRow = ({ children, classname }) => {
  return (
    <tr className={cn('border-b border-border text-sm', classname)}>
      {children}
    </tr>
  );
};

export default TableRow;
