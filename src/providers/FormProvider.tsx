import { useNavigate, useLocation } from 'react-router-dom';

import { useFormState } from '../hooks/useFormState';
import { useManageUrls } from '../hooks/useManageUrls';
import { FormProviderProps } from './FormProvider.types';


export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.replace('/', '');
    
    const { next, previous, getDataFromUrl } = useManageUrls();
    const { setDataToNextStep } = useFormState();

    const handleNextStep = (value: any) => {
        setDataToNextStep(pathname, value);
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
                next: handleNextStep,
                previous: handlePreviousStep,
                data: getDataFromUrl(pathname),
            })}
        </>
    );
}
