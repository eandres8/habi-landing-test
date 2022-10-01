import { useContext } from 'react';

import { FormFieldContext } from './FormFieldHOC';
import { FormInput } from './FormInput';
import { FormEmail } from './FormEmail';
import { FormRange } from './FormRange';

export const FormControl: React.FC = () => {
  const { type } = useContext(FormFieldContext);

  const mapComponent = {
    text: () => <FormInput />,
    email: () => <FormEmail />,
    range: () => <FormRange />,
    checkbox: () => <></>,
    currency: () => <></>,
    file: () => <></>,
    toggle: () => <></>,
  };
  
  return (
    <>
      {
        mapComponent[type]()
      }
    </>
  );
}
