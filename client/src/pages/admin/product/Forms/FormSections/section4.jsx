import { FormSectionWrapper, FormInput, Button, Slider } from '@/components';
import { useState } from 'react';

const Section4 = () => {
  const [stock, setStock] = useState(4);
  return (
    <FormSectionWrapper
      heading='Price & Stock'
      description='Decide the price and quantity of your product'
    >
      <div className='flex gap-4'>
        <div className='relative flex items-center'>
          <span className='absolute left-2 text-muted-foreground'>$</span>
          <FormInput className='w-full pl-6' />
        </div>
        <div className='flex items-center'>
          <Button
            label='-'
            className='rounded-l-lg rounded-r-none border-r-0'
            onClick={() => setStock((s) => Math.max(0, s - 1))}
          />
          <FormInput
            className='w-full rounded-none border-x-0 text-center'
            value={stock}
            onChange={(e) => setStock(Math.max(0, Number(e.target.value)))}
          />
          <Button
            label='+'
            className='rounded-r-lg rounded-l-none border-l-0'
            onClick={() => setStock((s) => s + 1)}
          />
        </div>
      </div>
      <Slider />
    </FormSectionWrapper>
  );
};

export default Section4;
