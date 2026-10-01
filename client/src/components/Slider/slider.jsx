import { useState } from 'react';
import { FormInput } from '..';
const Slider = ({ name = 'lowStockThreshold', min = 0, max = 50 }) => {
  const [value, setValue] = useState(10);
  return (
    <div>
      <div>
        <label htmlFor={name}>Low stock threshold</label>
        <span>{value}</span>
      </div>
      <FormInput
        type='range'
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Slider;
