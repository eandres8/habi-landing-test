import { useContext } from 'react';

import { InputField } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

export const FormInput: React.FC = () => {
    const { value, onChange, name, placeholder } = useContext(FormFieldContext);

    return <InputField
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />;
};
