import { FormInput, FormSectionWrapper } from '@/components';
import { useUIStore } from '@/store/useUIStore';

const Section1 = () => {
  const name = useUIStore((s) => s.name);
  const description = useUIStore((s) => s.description);
  const update = useUIStore((s) => s.update);
  return (
    <FormSectionWrapper
      heading='Basics'
      description='The name and description shopper see'
    >
      <div className='flex-1 flex flex-col gap-4'>
        <FormInput
          label='Product name'
          value={name}
          name='name'
          onChange={(e) => update('name', e.target.value)}
          placeholder='e.g. Leather tote bag product name'
          className='w-full'
        />
        <textarea
          placeholder='Describe the material, size, and what makes it special…'
          rows={3}
          value={description}
          name='description'
          onChange={(e) => update('description', e.target.value)}
          className='text-sm w-ful border border-input bg-input/20 px-3 py-2 resize-none rounded-lg  outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/30 md:rows-5'
        />
      </div>
    </FormSectionWrapper>
  );
};

export default Section1;
