import { Button } from '@/components';
import { getInitials } from '@/utils/getInitials.util';
import { FormSectionWrapper as Card } from '@/components';
const OrderCustomerCard = ({ customer }) => {
  const { name, email, phone, address } = customer;

  return (
    <Card className='border-primary border-2'>
      {/* Header */}
      <div className='flex items-center justify-between mb-5'>
        <h4 className='font-semibold text-primary'>Customer</h4>
        <Button label='Edit' />
      </div>

      {/* Avatar + name */}
      <div className='flex items-center gap-3 mb-5'>
        <div className='size-14 shrink-0 rounded-full bg-muted flex justify-center items-center font-semibold text-primary uppercase'>
          {getInitials(name)}
        </div>
        <h2 className='font-medium text-primary truncate'>{name}</h2>
      </div>

      {/* Details */}
      <div className='space-y-4 text-sm'>
        <div>
          <p className='uppercase text-xs text-muted-foreground mb-1'>
            Contact
          </p>
          <p>{phone}</p>
        </div>

        <div>
          <p className='uppercase text-xs text-muted-foreground mb-1'>Email</p>
          <p className='break-all'>{email}</p>
        </div>

        <div>
          <p className='uppercase text-xs text-muted-foreground mb-1'>
            Address
          </p>
          <p>
            {address.line1}, {address.city}, {address.country}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default OrderCustomerCard;
