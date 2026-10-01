import { categories } from '@/config';
import { Button, FormSectionWrapper } from '@/components';
import { useState } from 'react';
const Section3 = () => {
  const [category, setCategory] = useState('tote');
  return (
    <FormSectionWrapper>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-medium'>Category</h2>
        {category && (
          <Button
            label='clear'
            className='font-normal text-sm py-1 px-2 bg-transparent underline underline-offset-4 text-muted-foreground border-none hover:bg-transparent'
            onClick={() => setCategory('')}
          />
        )}
      </div>

      <div className='grid grid-cols-3 gap-4 text-sm'>
        {categories.map((item) => (
          <label className='cursor-pointer '>
            <input
              type='radio'
              className='peer hidden'
              value={item.value}
              checked={category === item.value}
              onChange={() => setCategory(item.value)}
            />
            <div className='p-3 bg-muted rounded-lg peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:ring-2 peer-focus-visible:ring-ring/50'>
              {<item.icon className='size-4' />}
              <p className='mt-4'>{item.label}</p>
            </div>
          </label>
        ))}
      </div>
    </FormSectionWrapper>
  );
};

export default Section3;
