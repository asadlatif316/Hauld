import { categories } from '@/config';
import { FormSectionWrapper } from '@/components';
const Section3 = () => {
  const category = useProductStore((s) => s.category);
  const update = useProductStore((s) => s.update);
  return (
    <FormSectionWrapper
      heading='Category'
      description='Pick one, drive the catalog filters'
    >
      <div className='flex-1 grid grid-cols-3 gap-4 text-sm'>
        {categories.map((item) => (
          <label key={item.label} className='cursor-pointer '>
            <input
              type='radio'
              className='peer hidden'
              name='category'
              value={item.value}
              checked={category === item.value}
              onChange={(e) => {
                update('category', e.target.value);
              }}
            />
            <div className='p-3 lg:aspect-3/2 flex flex-col justify-between bg-muted rounded-lg peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:ring-2 peer-focus-visible:ring-ring/50'>
              {<item.icon className='size-4 lg:size-5' />}
              <p className='mt-4'>{item.label}</p>
            </div>
          </label>
        ))}
      </div>
    </FormSectionWrapper>
  );
};

export default Section3;
