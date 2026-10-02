import { FormSectionWrapper } from '@/components';
import { Switch } from '@/lib';
const Section5 = () => {
  return (
    <FormSectionWrapper
      heading='Visibility'
      description='Control where this product appears'
    >
      <div className='flex-1 flex flex-col gap-2'>
        <div className='flex items-center justify-between text-sm lg:border-b border-border pb-1'>
          <div>
            {' '}
            <span className=''>Active</span>
            <p className='hidden lg:block text-muted-foreground text-sm'>
              Visible to shoppers in the storefront.
            </p>
          </div>
          <Switch />
        </div>
        <div className='flex items-center justify-between text-sm lg:border-b border-border pb-1'>
          <div>
            {' '}
            <span className=''>Featured</span>
            <p className='hidden lg:block text-muted-foreground text-sm'>
              Pinned to the storefront homepage and starred in the catalog.
            </p>
          </div>
          <Switch />
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default Section5;
