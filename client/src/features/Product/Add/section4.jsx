import {
  FormSectionWrapper,
  FormInput,
  Button,
  Slider,
  FormTitle,
} from '@/components';
import { useProductStore } from '@/store';
const Section4 = () => {
  const stock = useProductStore((s) => s.stock);
  const price = useProductStore((s) => s.price);
  const update = useProductStore((s) => s.update);
  return (
    <FormSectionWrapper>
      <FormTitle
        heading='Price & Stock'
        description='Decide the price and quantity of your product'
      />
      <div className='flex-1 flex flex-col gap-4 text-sm'>
        <div className='flex gap-4'>
          <div className='relative flex items-center'>
            <span className='absolute left-2 text-muted-foreground'>$</span>
            <FormInput
              className='w-full pl-6'
              value={price}
              type='number'
              name='price'
              onChange={(e) => update('price', e.target.value)}
            />
          </div>
          <div className='flex items-center'>
            <Button
              label='-'
              className='rounded-l-lg rounded-r-none border-r-0'
              onClick={() => update('stock', Math.max(0, stock - 1))}
            />
            <FormInput
              className='w-full rounded-none border-x-0 text-center'
              value={stock}
              type='number'
              name='stock'
              onChange={(e) =>
                update('stock', Math.max(0, Number(e.target.value)))
              }
            />
            <Button
              label='+'
              className='rounded-r-lg rounded-l-none border-l-0'
              onClick={() => update('stock', stock + 1)}
            />
          </div>
        </div>
        <Slider />
      </div>
    </FormSectionWrapper>
  );
};

export default Section4;
