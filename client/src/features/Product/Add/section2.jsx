import { FormSectionWrapper, FormInput, Button, FormTitle } from '@/components';
import { useProductStore } from '@/store';
import { Upload, X } from 'lucide-react';

const Section2 = () => {
  const image = useProductStore((s) => s.image);
  const update = useProductStore((s) => s.update);
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = async () => {
      update('image', reader.result);
    };
  };
  return (
    <FormSectionWrapper>
      <FormTitle heading='Image' description='Add Photo for the product' />
      {image ? (
        <div className='flex-1 relative rounded-xl aspect-4/2 text-muted-foreground overflow-hidden border border-border'>
          <img
            src={image}
            alt='Product Preview'
            className='h-full w-full object-cover'
          />
          <Button
            icon={<X className='size-5' />}
            className='absolute text-muted top-2 right-2 rounded-full p-1 backdrop-blur-2xl bg-primary/50 border-none'
            onClick={() => update('image', null)}
          />
        </div>
      ) : (
        <label
          htmlFor='image'
          className='flex-1 flex flex-col gap-3 justify-center items-center bg-muted border-2 border-muted-foreground border-dashed rounded-xl aspect-4/2 text-muted-foreground cursor-pointer'
        >
          <Upload />
          <p>Tap to Upload photo</p>
        </label>
      )}

      <input
        type='file'
        id='image'
        name='image'
        accept='image/*'
        className='hidden'
        onChange={handleFileUpload}
      />
    </FormSectionWrapper>
  );
};

export default Section2;
