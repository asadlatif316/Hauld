import { FormSectionWrapper } from '@/components';
import { FormInput, Upload } from 'lucide-react';

const Section2 = () => {
  return (
    <FormSectionWrapper>
      <h2 className='text-xl font-medium'>Image</h2>
      <label
        htmlFor='productImage'
        className='flex flex-col gap-3 justify-center items-center bg-muted border-2 border-muted-foreground border-dashed rounded-xl aspect-4/2 text-muted-foreground cursor-pointer'
      >
        <Upload />
        <p>Tap to Upload photo</p>
      </label>
      <input
        type='file'
        name='productImage'
        accept='image/*'
        id='productImage'
        className='hidden'
      />
    </FormSectionWrapper>
  );
};

export default Section2;
