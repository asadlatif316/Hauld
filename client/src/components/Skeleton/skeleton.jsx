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
    <table>
      <ProductTableHead/>
      <tbody>
      </tbody>
    </table>
  );
};

const GridSkeleton = () => {
  return <div>Grid Skeleton</div>;
};

export { CardSkeleton, GridSkeleton, ListSkeleton };
