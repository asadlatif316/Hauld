import { FormInput } from '@/components';

const Section1 = () => {
  return (
    <div className='flex flex-col gap-3 bg-primary-foreground px-4 py-6 border border-border rounded-xl'>
      <h2 className='text-xl font-medium'>Basics</h2>
      <FormInput label='Product name' placeholder='Enter product name' />
      <FormInput label='Description' />
    </div>
  );
};

export default Section1;
