import { FormInput, FormSectionWrapper } from '@/components';

const Section1 = () => {
  return (
    <FormSectionWrapper
      heading='Basics'
      description='The name and description shopper see'
    >
      <div className='flex-1 flex flex-col gap-4'>
        <FormInput label='Product name' placeholder='Enter product name' className='w-full'/>
        <FormInput label='Description' />
      </div>
    </FormSectionWrapper>
  );
};

export default Section1;
