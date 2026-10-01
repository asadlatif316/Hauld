import { FormSectionWrapper } from '@/components';
import { Switch } from '@/lib';
const Section5 = () => {
  return (
    <FormSectionWrapper
      heading='Visibility'
      description='Control where this product appears'
    >
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between text-sm'>
          <span className='text-muted-foreground'>Active</span>
          <Switch />
        </div>
        <div className='flex items-center justify-between text-sm'>
          <span className='text-muted-foreground'>Featured</span>
          <Switch />
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default Section5;
