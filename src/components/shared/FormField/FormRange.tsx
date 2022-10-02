import { useContext } from 'react';

import { InputField, StepButton } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

export const FormRange: React.FC = () => {
    const { value = 1, onChange, name, placeholder, min, max } = useContext<any>(FormFieldContext);

    const add = () => {
        const newValue = value < max
            ? value + 1
            : value;

        onChange(newValue);
    };
    
    const reduce = () => {
        const newValue = value > min
            ? value - 1
            : value;

        onChange(newValue);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = event.target;

        onChange(+inputValue);
    };

    return (
        <div>
            <StepButton onClick={reduce}>-</StepButton>
            <InputField
                id={name}
                name={name}
                value={value}
                type="number"
                min={min}
                max={max}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <StepButton onClick={add}>+</StepButton>
        </div>
    );
}
