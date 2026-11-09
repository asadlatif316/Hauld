import { TableHeader, Table } from '../Table';
import { orderColumns } from '@/features/Order/constants/column';
orderColumns
const CardSkeleton = () => {
  return (
    <div className='w-full space-y-4  animate-pulse'>
      {[...Array(3)].map((_, index) => (
        <div key={index} className='flex gap-4 p-4 rounded-lg bg-card border'>
          <div className='h-20 w-20 bg-muted rounded-lg'></div>
          <div className='flex-1 flex flex-col min-w-0 gap-2'>
            <div className='h-4 w-11/12 rounded-full bg-muted'></div>
            <div className='h-4 min-w-20 w-30 rounded-full bg-muted'></div>
            <div className='h-4 min-w-50 mt-auto w-30 rounded-full bg-muted'></div>
          </div>
        </div>
      ))}
    </div>
  );
};
const ListSkeleton = ({ columns }) => {
  return (
    <Table className='hidden md:table'>
      <TableHeader columns={columns} />
      <tbody className='animate-pulse'>
        {[...Array(6)].map((_, rowIndex) => (
          <tr key={rowIndex} className='border-b border-border'>
            {columns.map((col) => (
              <td key={col.key} className={col.className}>
                {col.key === 'actions' ? (
                  <div className='flex justify-end gap-2'>
                    <div className='size-7 bg-muted rounded'></div>
                    <div className='size-7 bg-muted rounded'></div>
                  </div>
                ) : (
                  <div className='w-16 h-3 rounded bg-muted'></div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const GridSkeleton = () => {
  return (
    <div className='grid-cols-2 gap-4 lg:grid-cols-3'>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className='overflow-hidden rounded-xl border border-border'
        >
          <div className='aspect-4/3 bg-muted'></div>
          <div className='space-y-2 p-3'>
            <div className='w-3/4 h-3 bg-muted'></div>
            <div className='w-2/5 h-2.5 bg-muted'></div>
            <div className='flex items-center justify-between'>
              <div className='h-3 w-1/4 bg-muted'></div>
              <div className='flex items-center gap-2'>
                <div className='size-7 bg-muted rounded-lg'></div>
                <div className='size-7 bg-muted rounded-lg'></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const OrderCardSkeleton = () => {
  return (
    <div className='md:hidden flex flex-col gap-4 p-4 animate-pulse'>
      {[...Array(3)].map((_, index) => (
        <div key={index} className='border border-border bg-primary-foreground rounded-2xl p-5'>
          <div className='border-b border-border pb-4 flex justify-between items-center gap-3'>
            <div className='flex flex-col gap-3 flex-1'>
              <div className='bg-muted h-5 w-3/4 rounded-full'></div>
              <div className='bg-muted h-4 w-full max-w-56 rounded-full'></div>
            </div>
            <div className='bg-muted h-9 w-24 rounded-full shrink-0'></div>
          </div>

          <div className='py-4 border-b border-border flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='size-16 bg-muted rounded-full shrink-0'></div>
              <div className='space-y-2 flex-1'>
                <div className='bg-muted h-4 w-3/4 rounded-full'></div>
                <div className='bg-muted h-3 w-full max-w-48 rounded-full'></div>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='size-16 bg-muted rounded-2xl shrink-0'></div>
              <div className='bg-muted h-4 w-3/4 rounded-full'></div>
            </div>
          </div>

          <div className='pt-4 flex justify-between items-center gap-3'>
            <div className='bg-muted h-10 w-24 rounded-2xl shrink-0'></div>
            <div className='flex gap-2'>
              <div className='bg-muted h-14 w-20 rounded-2xl'></div>
              <div className='bg-muted h-14 w-24 rounded-2xl'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CardSkeleton, GridSkeleton, ListSkeleton, OrderCardSkeleton };
