import { useContext } from 'react';

import { FormFieldContext } from './FormFieldHOC';
import { FormInput } from './FormInput';
import { FormEmail } from './FormEmail';
import { FormRange } from './FormRange';
import { FormCheckbox } from './FormCheckbox';
import { FormToggleSwitch } from './FormToggleSwitch';
import { FormCurrency } from './FormCurrency';

export const FormControl: React.FC = () => {
  const { type } = useContext(FormFieldContext);

  const mapComponent = {
    text: () => <FormInput />,
    email: () => <FormEmail />,
    range: () => <FormRange />,
    checkbox: () => <FormCheckbox />,
    currency: () => <FormCurrency />,
    file: () => <></>,
    toggle: () => <FormToggleSwitch />,
  };
  
  return (
    <>
      {
        mapComponent[type]()
      }
    </>
  );
}
