import { statusStyles } from '../constants/orderStyles';

const OrderStatusBadge = ({ status }) => {
  const style = statusStyles[status] ?? {
    label: status,
    className: 'bg-secondary text-muted-foreground border-border',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${style.className}`}
    >
      {style.label}
    </span>
  );
};

export default OrderStatusBadge;
