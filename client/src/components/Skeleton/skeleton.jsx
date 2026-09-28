import { ProductTableHead } from '@/pages/admin/product';

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

const ListSkeleton = () => {
  return (
    <table className='w-full table-fixed'>
      <ProductTableHead />
      <tbody className='animate-pulse'>
        {[...Array(6)].map((_, index) => (
          <tr key={index} className='border-b border-border'>
            <td className='p-3'>
              <div className='flex items-center gap-3'>
                <div className='size-9 bg-muted rounded-lg'></div>
                <div className='space-y-2'>
                  <div className='w-36 h-3 rounded bg-muted'></div>
                  <div className='h-3 w-20 rounded bg-muted'></div>
                </div>
              </div>
            </td>
            <td className='hidden lg:table-cell p-3'>
              <div className='w-16 h-3 rounded bg-muted'></div>
            </td>
            <td className='p-3'>
              <div className='w-16 h-3 rounded bg-muted'></div>
            </td>
            <td className='p-3'>
              <div className='w-16 h-3 rounded bg-muted'></div>
            </td>
            <td className='p-3'>
              <div className='w-16 h-3 rounded bg-muted'></div>
            </td>
            <td className='hidden lg:table-cell p-3'>
              <div className='w-16 h-3 rounded bg-muted'></div>
            </td>
            <td className='p-3'>
              <div className='flex justify-end gap-2'>
                <div className='size-7 bg-muted rounded'></div>
                <div className='size-7 bg-muted rounded'></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const GridSkeleton = () => {
  return (
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
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

export { CardSkeleton, GridSkeleton, ListSkeleton };
