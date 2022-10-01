import { ErrorResponse } from '@remix-run/router';
import { useContext, useState } from 'react';

import { REGEX_EMAIL } from '../../../constants/regex';
import { InputField } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

export const FormEmail: React.FC = () => {
    const { value, onChange, name, placeholder } = useContext(FormFieldContext);
    const [error, setError] = useState('');

    const handleEmailValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const { value, name } = event.target;

        const errorMessage = value.toLowerCase().match(REGEX_EMAIL)
            ? ''
            : 'No es un correo válido';
        
        setError(errorMessage);
        console.log({ event });
        console.log({ errorMessage });
        onChange(event);
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
