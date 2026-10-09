import { FormSectionWrapper } from '@/components';
import { Switch } from '@/lib';
import { useProductStore } from '@/store';
const Section5 = () => {
  const isActive = useProductStore((s) => s.isActive);
  const isFeatured = useProductStore((s) => s.isFeatured);
  const update = useProductStore((s) => s.update);

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
          <Switch
            checked={isActive}
            onCheckedChange={(value) => update('isActive', value)}
            name='isActive'
          />
        </div>
        <div className='flex items-center justify-between text-sm lg:border-b border-border pb-1'>
          <div>
            {' '}
            <span className=''>Featured</span>
            <p className='hidden lg:block text-muted-foreground text-sm'>
              Pinned to the storefront homepage and starred in the catalog.
            </p>
          </div>
          <Switch
            checked={isFeatured}
            onCheckedChange={(value) => update('isFeatured', value)}
            name='isFeatured'
          />
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default Section5;
