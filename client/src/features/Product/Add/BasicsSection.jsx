import { FormInput, FormSectionWrapper, Button } from '@/components';
import { FormTitle } from '@/components';
import { useProductStore } from '@/store';

const BasicSection = ({ enableEdit = false }) => {
  // create page state
  const name = useProductStore((s) => s.name);
  const description = useProductStore((s) => s.description);
  const update = useProductStore((s) => s.update);

  // edit page state
  const singleProduct = useProductStore((s) => s.singleProduct);
  const editDraft = useProductStore((s) => s.editDraft);
  const updateDraft = useProductStore((s) => s.updateDraft);
  const isEditing = useProductStore((s) => s.isEditing);

  const editValue = isEditing && editDraft ? editDraft : singleProduct;
  const values = enableEdit ? editValue : { name, description };
  const onChange = enableEdit ? updateDraft : update;
  const readOnly = enableEdit & !isEditing;
  return (
    <FormSectionWrapper>
      <FormTitle
        heading='Basics'
        description='Enter the Product name and description.'
      />
      <div className='flex-1 flex flex-col gap-4'>
        <FormInput
          label='Product name'
          value={values.name}
          name='name'
          onChange={(e) => onChange('name', e.target.value)}
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
            value={values.description}
            name={'description'}
            onChange={(e) => onChange('description', e.target.value)}
            className='text-sm w-ful border border-input bg-input/20 px-3 py-2 resize-none rounded-lg  outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/30 md:rows-5'
            readOnly={readOnly}
          />
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default BasicSection;
