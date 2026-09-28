const ProductTableHead = () => {
  return (
    <thead className='bg-muted text-left text-primary text-sm lg:text-base rounded-md'>
      <tr>
        <th scope='col' className='w-1/3 font-medium p-4'>
          Name
        </th>
        <th scope='col' className='hidden lg:table-cell font-medium p-4'>
          Category
        </th>
        <th scope='col' className='font-medium p-4'>
          Stock
        </th>
        <th scope='col' className='font-medium p-4'>
          Price
        </th>
        <th scope='col' className='font-medium p-4'>
          Status
        </th>
        <th scope='col' className='hidden lg:table-cell font-medium p-3'>
          IsFeatured
        </th>
        <th scope='col' className='font-medium p-4 text-right '>
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default ProductTableHead;
