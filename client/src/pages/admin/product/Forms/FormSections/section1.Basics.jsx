import { FormInput, FormSectionWrapper } from '@/components';

const Section1 = () => {
  return (
    <FormSectionWrapper>
      <h2 className='text-xl font-medium'>Basics</h2>
      <FormInput label='Product name' placeholder='Enter product name' />
      <FormInput label='Description' />
    </FormSectionWrapper>
  );
};

export default Section1;
