import { FormSectionWrapper, FormInput, Button } from '@/components';
import { Upload, X } from 'lucide-react';
import { useState } from 'react';

const Section2 = () => {
  const [image, setImage] = useState();
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
  return (
    <FormSectionWrapper>
      <h2 className='text-xl font-medium'>Image</h2>
      {image ? (
        <div className='relative rounded-xl aspect-4/2 text-muted-foreground overflow-hidden border border-border'>
          <img
            src={image}
            alt='Product Preview'
            className='h-full w-full object-cover'
          />
          <Button
            icon={<X className='size-5' />}
            className='absolute text-muted top-2 right-2 rounded-full p-1 backdrop-blur-2xl bg-primary/50 border-none'
            onClick={() => setImage(null)}
          />
        </div>
      ) : (
        <label
          htmlFor='productImage'
          className='flex flex-col gap-3 justify-center items-center bg-muted border-2 border-muted-foreground border-dashed rounded-xl aspect-4/2 text-muted-foreground cursor-pointer'
        >
          <Upload />
          <p>Tap to Upload photo</p>
        </label>
      )}

      <FormInput
        type='file'
        name='productImage'
        accept='image/*'
        className='hidden'
        onChange={handleFileUpload}
      />
    </FormSectionWrapper>
  );
};

export default Section2;
