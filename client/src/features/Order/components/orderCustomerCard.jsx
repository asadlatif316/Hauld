import { Button } from '@/components';
import { getInitials } from '@/utils/getInitials.util';
import { FormSectionWrapper as Card } from '@/components';
import { useState } from 'react';
import { useOrderStore } from '@/store';
import { FormInput } from '@/components';
const OrderCustomerCard = ({ customer, id }) => {
  const { name, email, phone, address } = customer;
  const [edit, setEdit] = useState(false);
  const draft = useOrderStore((s) => s.draft);
  const updateCustomer = useOrderStore((s) => s.updateCustomer);
  const updateAddress = useOrderStore((s) => s.updateAddress);
  const saveDraft = useOrderStore((s) => s.saveDraft);
  return (
    <Card className='border-primary border-2'>
      {/* Header */}
      <div className='w-full'>
        {' '}
        <div className='flex items-center justify-between mb-5'>
          <h4 className='font-semibold text-primary'>Customer</h4>
          {edit ? (
            <div className='flex gap-2'>
              <Button label='Cancel' onClick={() => setEdit(false)} />
              <Button
                label='Save'
                onClick={async () => {
                  await saveDraft(id);
                  setEdit(false);
                }}
              />
            </div>
          ) : (
            <Button label='Edit' onClick={() => setEdit(true)} />
          )}
        </div>
        {/* Avatar + name */}
        <div className='flex items-center gap-3 mb-5'>
          <div className='size-14 shrink-0 rounded-full bg-muted flex justify-center items-center font-semibold text-primary uppercase'>
            {getInitials(name)}
          </div>
          {edit ? (
            <FormInput
              placeholder='Full name'
              value={draft.customer.name}
              onChange={(e) => updateCustomer('name', e.target.value)}
            />
          ) : (
            <h2 className='font-medium text-primary capitalize truncate'>
              {name}
            </h2>
          )}{' '}
        </div>
        {/* Details */}
        <div className='space-y-4 text-sm'>
          {edit ? (
            <div>
              <p className='uppercase text-xs text-muted-foreground mb-1'>
                Phone
              </p>
              <FormInput
                type='email'
                value={draft.customer.phone}
                onChange={(e) => updateCustomer('phone', e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p className='uppercase text-xs text-muted-foreground mb-1'>
                Email
              </p>
              <p className='break-all'>{phone}</p>
            </div>
          )}

          {edit ? (
            <div>
              <p className='uppercase text-xs text-muted-foreground mb-1'>
                Email
              </p>
              <FormInput
                type='email'
                value={draft.customer.email}
                onChange={(e) => updateCustomer('email', e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p className='uppercase text-xs text-muted-foreground mb-1'>
                Email
              </p>
              <p className='break-all'>{email}</p>
            </div>
          )}

          <div>
            <p className='uppercase text-xs text-muted-foreground mb-1'>
              Address
            </p>

            {edit ? (
              <div className='space-y-2'>
                <FormInput
                  placeholder='Street address'
                  value={draft.customer.address.line1}
                  onChange={(e) => updateAddress('line1', e.target.value)}
                />
                <FormInput
                  placeholder='City'
                  value={draft.customer.address.city}
                  onChange={(e) => updateAddress('city', e.target.value)}
                />
                <FormInput
                  placeholder='Country'
                  value={draft.customer.address.country}
                  onChange={(e) => updateAddress('country', e.target.value)}
                />
              </div>
            ) : (
              <p>
                {address.line1}, {address.city}, {address.country}
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderCustomerCard;
