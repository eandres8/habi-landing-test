import React, { useContext } from 'react';

import { ToggleSwitch } from '../ToggleSwitch';
import { FormFieldContext } from './FormFieldHOC';
import { ToggleOption } from '../../../interfaces/json-data.type';

export const FormToggleSwitch: React.FC = () => {
  const { value, onChange, name, options } = useContext<any>(FormFieldContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, checked } = event.target;

    const newValue = {
      ...value,
      [inputName]: checked,
    };

    onChange(newValue);
  };

  const hideDependencyOption = (dependence: string) => {
    if (dependence && !value[dependence]) {
      return 'd-none';
    }
    
    return 'd-flex';
  };

  return (
    <>
      {options.map((option: ToggleOption) => (
        <div className={hideDependencyOption(option.dependence || '')} key={option.name}>
          <ToggleSwitch
            name={option.name}
            onChange={handleChange}
            id={`${name}-${option.name}`}
            checked={value[option.name] || false}
          />
          <label htmlFor={`${name}-${option.name}`}>{option.text}</label>
        </div>
      ))}
    </>
  );
};
