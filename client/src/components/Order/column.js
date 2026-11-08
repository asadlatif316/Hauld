export const orderColumns = [
  { key: 'orderNumber', label: 'Order', className: 'w-36 p-4' },
  { key: 'customer', label: 'Customer', className: 'w-46 p-4' },
  {
    key: 'placedAt',
    label: 'Date',
    className: 'w-32 hidden lg:table-cell p-4',
  },
  { key: 'items', label: 'Items', className: 'w-20 hidden xl:table-cell p-4' },
  { key: 'total', label: 'Total', className: 'w-28 p-4' },
  { key: 'status', label: 'Status', className: 'w-32 p-4' },
  { key: 'actions', label: 'Actions', className: 'w-24 p-4 text-right' },
];
