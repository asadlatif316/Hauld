import { FormSectionWrapper, FormInput, Button } from '@/components';

const Section4 = () => {
  return (
    <FormSectionWrapper
      heading='Price & Stock'
      description='Decide the price and quantity of your product'
    >
      <div>
        <div>
          <span>$</span>
          <FormInput />
        </div>
        <div>
          <Button label='+' />
          <FormInput />
          <Button label='-' />
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default Section4;
