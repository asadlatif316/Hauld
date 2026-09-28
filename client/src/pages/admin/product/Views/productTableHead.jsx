const ProductTableHead = () => {
  return (
    <table className='w-full table-fixed'>
      <thead className='bg-muted text-left text-primary text-sm lg:text-base rounded-md'>
        <tr>
          <th className='font-medium p-4'>Name</th>
          <th className='hidden lg:table-cell font-medium p-4'>Category</th>
          <th className='font-medium p-4'>Stock</th>
          <th className='font-medium p-4'>Price</th>
          <th className='font-medium p-4'>Status</th>
          <th className='hidden lg:table-cell font-medium p-3'>IsFeatured</th>
          <th className='font-medium p-4 text-right '>Actions</th>
        </tr>
      </thead>
    </table>
  );
};

export default ProductTableHead;
