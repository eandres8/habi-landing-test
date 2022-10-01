import { useContext, useState } from 'react';

import { REGEX_EMAIL } from '../../../constants/regex';
import { InputField } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

export const FormEmail: React.FC = () => {
    const { value, onChange, name, placeholder } = useContext(FormFieldContext);
    const [error, setError] = useState('');

    const handleEmailValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = event.target;

        const errorMessage = inputValue.toLowerCase().match(REGEX_EMAIL)
            ? ''
            : 'No es un correo válido';
            
        setError(errorMessage);
        onChange(inputValue);
    }

    return <>
        <InputField
            id={name}
            name={name}
            value={value}
            type="email"
            placeholder={placeholder}
            onChange={handleEmailValidate}
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
    </>;
};
