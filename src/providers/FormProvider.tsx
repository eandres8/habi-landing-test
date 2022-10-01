import { useNavigate, useLocation } from 'react-router-dom';

import { useFormState } from '../hooks/useFormState';
import { useManageUrls } from '../hooks/useManageUrls';
import { FormProviderProps, NextStepType } from './FormProvider.types';


export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.replace('/', '');
    
    const { next, previous } = useManageUrls();
    const { setDataToNextStep } = useFormState();

    const handleNextStep = (value: any) => {
        setDataToNextStep(pathname, value);
        navigate(`/${next(pathname)}`);
    };

    const handlePreviusStep = () => {
        navigate(`/${previous(pathname)}`);
    };

    return (
        <>
            {children({
                navigate,
                pathname,
                next: handleNextStep,
                previus: handlePreviusStep,
            })}
        </>
    );
}
