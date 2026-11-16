import { Button } from '@/components';
import { useState } from 'react';
import { FormSectionWrapper as Card } from '@/components';
const OrderNotesCard = ({ orderId, notes }) => {
  return (
    <Card>
      <div className='w-full'>
        <div className='flex items-center justify-between mb-4'>
          <h4 className='font-semibold text-primary'>Internal Notes</h4>
          {<Button label='Save' />}
        </div>
        <textarea
          rows={4}
          placeholder='Add a note for your team...'
          className='w-full resize-none rounded-xl border border-border bg-muted/40 p-3 text-sm text-primary placeholder:text-muted-foreground outline-none focus:border-primary'
        />
      </div>
    </Card>
  );
};

export default OrderNotesCard;
