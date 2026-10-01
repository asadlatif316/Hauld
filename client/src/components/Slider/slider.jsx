import { useState } from 'react';
import { FormInput } from '..';
const Slider = ({ name = 'lowStockThreshold', min = 0, max = 50 }) => {
  const [value, setValue] = useState(10);
  const percent = ((value - min) / (value - max)) * 100;
  return (
    <div className='flex flex-col gap-2 bg-muted p-4 rounded-lg border border-border'>
      <div className='flex items-center justify-between text-sm'>
        <label htmlFor={name}>Low stock threshold</label>
        <span className='text-muted-foreground font-mono'>{value}</span>
      </div>
      <FormInput
        type='range'
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(e.target.value)}
        style={{
          background: `linear-gradient(to right, #f59e0b ${percent}%, #d4d4d8 ${percent}%)`,
        }}
        className='h-2 w-full cursor-pointer appearance-none rounded-full
  [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:ring-4 [&::-webkit-slider-thumb]:ring-background
  [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-foreground'
      />
    </div>
  );
};

export default Slider;
