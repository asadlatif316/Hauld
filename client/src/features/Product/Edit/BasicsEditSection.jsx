import { FormInput, FormSectionWrapper, Button } from '@/components';
import { FormTitle } from '@/components';
import { useProductStore } from '@/store';

const BasicSection = () => {
  const singleProduct = useProductStore((s) => s.singleProduct);
  const editDraft = useProductStore((s) => s.editDraft);
  const updateDraft = useProductStore((s) => s.updateDraft);
  const isEditing = useProductStore((s) => s.isEditing);
  const handleEdit = useProductStore((s) => s.handleEdit);
  const handleCancelEdit = useProductStore((s) => s.handleCancelEdit);
  const values = isEditing && editDraft ? editDraft : singleProduct;
  return (
    <FormSectionWrapper>
      <div className='flex items-center justify-between lg:items-start'>
        <FormTitle
          heading='Basics'
          description='Enter the Product name and description.'
        />
        {!isEditing && <Button label='edit' onClick={handleEdit} />}
      </div>
      <div className='flex-1 flex flex-col gap-4'>
        <FormInput
          label='Product name'
          value={values.name}
          name='name'
          onChange={(e) => updateDraft('name', e.target.value)}
          placeholder='e.g. Leather tote bag product name'
          className='w-full text-sm'
          readOnly={!isEditing}
        />
        <div className='flex flex-col gap-2'>
          <label htmlFor='description' className='font-medium'>
            Description
          </label>
          <textarea
            placeholder='Describe the material, size, and what makes it special…'
            rows={3}
            value={values.description}
            name='description'
            onChange={(e) => updateDraft('description', e.target.value)}
            className='text-sm w-ful border border-input bg-input/20 px-3 py-2 resize-none rounded-lg  outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/30 md:rows-5'
            readOnly={!isEditing}
          />
        </div>
        {isEditing && (
          <div className='flex gap-1 ml-auto'>
            <Button
              className='bg-muted-foreground hover:bg-muted-foreground/80'
              label='cancel'
              onClick={handleCancelEdit}
            />
            <Button label='save' />
          </div>
        )}
      </div>
    </FormSectionWrapper>
  );
};

export default BasicSection;
