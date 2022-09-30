import { createContext } from 'react';

interface FormFieldProps {
    label?: string;
    name: string;
    onChange: (event: any) => void;
    value: any;
}

interface Props {
    formField: FormFieldProps;
    children: React.ReactNode;
}

export const FormFieldContext = createContext({} as FormFieldProps);

export const FormFieldHOC: React.FC<Props> = ({ children, formField }) => {
  return (
    <FormFieldContext.Provider value={formField}>
        <div className="d-flex flex-direction-column">
            {formField.label && <label style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>{formField.label}</label>}
            {children}
        </div>
    </FormFieldContext.Provider>
  );
}
