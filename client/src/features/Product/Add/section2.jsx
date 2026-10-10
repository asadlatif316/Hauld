import { FormSectionWrapper, FormInput, Button, FormTitle } from '@/components';
import { useProductStore } from '@/store';
import { Upload, X } from 'lucide-react';
import { selectField, selectReadOnly } from '@/utils';
import { useRef } from 'react';
const Section2 = () => {
  const fileRef = useRef(null);
  const image = useProductStore(selectField('image'));
  const mode = useProductStore((s) => s.mode);
  const readOnly = useProductStore(selectReadOnly);
  console.log(readOnly);

  const updateField = useProductStore((s) => s.updateField);
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = async () => {
      updateField('image', reader.result);
    };
    e.target.value = '';
  };
  return (
    <FormSectionWrapper>
      <FormTitle heading='Image' description='Add Photo for the product' />
      {image ? (
        <div className='flex-1 relative rounded-xl aspect-4/2 text-muted-foreground overflow-hidden border border-border'>
          <img
            src={mode === 'edit' ? image?.url : image}
            alt='Product Preview'
            className='h-full w-full object-cover'
          />
          {!readOnly && (
            <Button
              icon={<X className='size-5' />}
              className='absolute text-muted top-2 right-2 rounded-full p-1 backdrop-blur-2xl bg-primary/50 border-none'
              onClick={() => updateField('image', null)}
            />
          )}
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
        ref={fileRef}
        type='file'
        id='image'
        name='image'
        accept='image/*'
        className='hidden'
        onChange={handleFileUpload}
        disabled={readOnly}
      />
      {image && !readOnly && (
        <div className='flex justify-between gap-2'>
          <Button
            className='w-full bg-destructive hover:bg-destructive/70 py-2'
            label='Remove'
            onClick={() => updateField('image', null)}
          />
          <Button
            className='w-full'
            label='Replace'
            onClick={() => fileRef.current?.click()}
          />
        </div>
      )}
    </FormSectionWrapper>
  );
};

export default Section2;
