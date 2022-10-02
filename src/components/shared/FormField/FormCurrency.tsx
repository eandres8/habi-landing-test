import { useContext } from 'react';

import { InputField } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

export const FormCurrency: React.FC = () => {
  const { value, onChange, name, placeholder, currency } =
    useContext<any>(FormFieldContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.target;

    onChange(inputValue);
  };

  return (
    <div>
        <span style={{ marginRight: '1rem' }}>$</span>
        <InputField
            id={name}
            name={name}
            value={value}
            type="number"
            placeholder={placeholder}
            onChange={handleChange}
        />
        <span style={{ marginLeft: '1rem' }}>{currency}</span>
    </div>
  );
};
