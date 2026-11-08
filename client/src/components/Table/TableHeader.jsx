const TableHeader = ({ columns }) => {
  return (
    <thead className='bg-muted text-left text-primary text-sm lg:text-base rounded-md'>
      {columns.map((col) => (
        <tr key={col.key}>
          <th scope='col' className={`font-medium ${col.className}`}>
            {col.label}
          </th>
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
