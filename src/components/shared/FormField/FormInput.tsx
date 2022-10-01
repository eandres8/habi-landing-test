import { useContext } from 'react';

import { InputField } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

export const FormInput: React.FC = () => {
    const { value, onChange, name, placeholder } = useContext(FormFieldContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = event.target;

      onChange(inputValue);
    }

    return <InputField
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />;
};
