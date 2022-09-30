import { useContext } from 'react';

import { InputField } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

interface Props {
  type?: 'text' | 'password' | '';
  placeholder?: string;
}

export const FormInput: React.FC<Props> = (props) => {
    const { value, onChange, name } = useContext(FormFieldContext);

    return <InputField
      {...props}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />;
};
