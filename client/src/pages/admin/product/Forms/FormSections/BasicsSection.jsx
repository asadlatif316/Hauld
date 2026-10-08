import { FormInput, FormSectionWrapper, Button } from '@/components';
import { useUIStore } from '@/store/useUIStore';
import FormTitle from '../FormTitle';
import { useState } from 'react';

const BasicSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const name = useUIStore((s) => s.name);
  const description = useUIStore((s) => s.description);
  const update = useUIStore((s) => s.update);
  return (
    <FormSectionWrapper>
      <div className='flex items-center justify-between'>
        <FormTitle
          heading='Basics'
          description='Enter the Product name and description.'
        />
        {!isEditing && (
          <Button label='edit' onClick={() => setIsEditing(true)} />
        )}
      </div>
      <div className='flex-1 flex flex-col gap-4'>
        <FormInput
          label='Product name'
          value={name}
          name='name'
          onChange={(e) => update('name', e.target.value)}
          placeholder='e.g. Leather tote bag product name'
          className='w-full text-sm'
          readOnly={!isEditing}
        />
        <div className='flex flex-col gap-2'>
          <label htmlFor="description" className='font-medium'>Description</label>
          <textarea
            placeholder='Describe the material, size, and what makes it special…'
            rows={3}
            value={description}
            name='description'
            onChange={(e) => update('description', e.target.value)}
            className='text-sm w-ful border border-input bg-input/20 px-3 py-2 resize-none rounded-lg  outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/30 md:rows-5'
            readOnly={!isEditing}
          />
        </div>
        {isEditing && (
          <div className='flex gap-1 ml-auto'>
            <Button label='cancel' onClick={() => setIsEditing(false)} />
            <Button label='save' />
          </div>
        )}
      </div>
    </FormSectionWrapper>
  );
};

export default BasicSection;
