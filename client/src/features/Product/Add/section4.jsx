import {
  FormSectionWrapper,
  FormInput,
  Button,
  Slider,
  FormTitle,
} from '@/components';
import { useProductStore } from '@/store';
import { selectField, selectReadOnly } from '@/utils';
const Section4 = () => {
  const stock = useProductStore(selectField('stock'));
  const price = useProductStore(selectField('price'));
  const updateField = useProductStore((s) => s.updateField);
  const readOnly = useProductStore(selectReadOnly);

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
              onChange={(e) => updateField('price', e.target.value)}
              readOnly={readOnly}
            />
          </div>
          <div className='flex items-center'>
            <Button
              label='-'
              className='rounded-l-lg py-2.5 rounded-r-none border-r-0'
              onClick={() => updateField('stock', Math.max(0, stock - 1))}
              disabled={readOnly}
            />
            <FormInput
              className='w-full rounded-none border-x-0 text-center'
              value={stock}
              type='number'
              name='stock'
              onChange={(e) =>
                updateField('stock', Math.max(0, Number(e.target.value)))
              }
              readOnly={readOnly}
            />
            <Button
              label='+'
              className='rounded-r-lg py-2.5 rounded-l-none border-l-0'
              onClick={() => updateField('stock', stock + 1)}
              disabled={readOnly}
            />
          </div>
        </div>
        <Slider />
      </div>
    </FormSectionWrapper>
  );
};

export default Section4;
