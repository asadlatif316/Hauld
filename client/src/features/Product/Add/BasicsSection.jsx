import { FormInput, FormSectionWrapper, Button } from '@/components';
import { FormTitle } from '@/components';
import { useProductStore } from '@/store';
import { selectReadOnly, selectField } from '@/utils';

const BasicSection = () => {
  const name = useProductStore(selectField('name'));
  const description = useProductStore(selectField('description'));
  
  const updateField = useProductStore((s) => s.updateField);
  const readOnly = useProductStore(selectReadOnly);
  console.log(name,description,readOnly);

  return (
    <FormSectionWrapper>
      <FormTitle
        heading='Basics'
        description='Enter the Product name and description.'
      />
      <div className='flex-1 flex flex-col gap-4'>
        <FormInput
          label='Product name'
          value={name}
          name='name'
          onChange={(e) => updateField('name', e.target.value)}
          placeholder='e.g. Leather tote bag product name'
          className='w-full text-sm'
          readOnly={readOnly}
        />
        <div className='flex flex-col gap-2'>
          <label htmlFor='description' className='font-medium'>
            Description
          </label>
          <textarea
            placeholder='Describe the material, size, and what makes it special…'
            rows={3}
            value={description}
            name={'description'}
            onChange={(e) => updateField('description', e.target.value)}
            className='text-sm w-ful border border-input bg-input/20 px-3 py-2 resize-none rounded-lg  outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/30 md:rows-5'
            readOnly={readOnly}
          />
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default BasicSection;
