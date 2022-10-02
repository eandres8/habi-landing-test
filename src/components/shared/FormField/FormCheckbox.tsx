import { useContext } from 'react';

import { FormFieldContext } from './FormFieldHOC';

export const FormCheckbox: React.FC = () => {
    const { value, onChange, options } = useContext<any>(FormFieldContext);

    const handleChange = (valueOption: string) => {
        const data = value.includes(valueOption)
            ? [...value, valueOption]
            : value.filter((val: string) => val !== valueOption);

        onChange(data);
    };

    return (
        <>
            {
                options.map((option: any) => (
                    <div key={option.value}>
                        <input
                            type="checkbox"
                            name={option.value}
                            id={option.value}
                            checked={value.includes(option.value)}
                            onChange={() => handleChange(option.value)}
                        />
                        <label htmlFor={option.value}>{option.text}</label>
                    </div>
                ))
            }
        </>
    )
}
