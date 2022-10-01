import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useFormState } from '../hooks/useFormState';
import { useManageUrls } from '../hooks/useManageUrls';
import { FormProviderProps } from './FormProvider.types';


export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState<any>('');

    const pathname = location.pathname.replace('/', '');
    
    const { next, previous, getDataFromUrl } = useManageUrls();
    const { setDataToNextStep } = useFormState();

    const handleNextStep = () => {
        setDataToNextStep(pathname, value);
        setValue('');
        navigate(`/${next(pathname)}`);
    };

    const handlePreviousStep = () => {
        navigate(`/${previous(pathname)}`);
    };

    return (
        <>
            {children({
                navigate,
                pathname,
                nextTo: handleNextStep,
                previousTo: handlePreviousStep,
                data: getDataFromUrl(pathname),
                value,
                setValue,
            })}
        </>
    );
}
