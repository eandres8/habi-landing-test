import { useContext } from 'react';

import { FormFieldContext } from './FormFieldHOC';
import { FormInput } from './FormInput';
import { FormEmail } from './FormEmail';

export const FormControl: React.FC = () => {
  const { type } = useContext(FormFieldContext);

  const mapComponent = {
    text: () => <FormInput />,
    email: () => <FormEmail />,
    range: () => <></>,
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
