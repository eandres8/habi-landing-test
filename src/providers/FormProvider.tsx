import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useFormState } from '../hooks/useFormState';
import { useManageUrls } from '../hooks/useManageUrls';
import { FormProviderProps } from './FormProvider.types';

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState<any>('');

    const pathname = location.pathname.replace('/', '');
    
    const { next, previous, getDataFromUrl, defaultData, pathList } = useManageUrls();
    const { setDataToNextStep, doInitState, storeData } = useFormState();

    const setScreenData = (path: string) => {
        const nextData = getDataFromUrl(path);
        const valueData = storeData[nextData.name];

        setValue(valueData);
    }

    const handleNextStep = () => {
        const nextData = getDataFromUrl(pathname);
        const nextStep = next(pathname);
        setDataToNextStep(nextData.name, value);
        setScreenData(nextStep!);
        navigate(`/${nextStep}`);
    };

    const handlePreviousStep = () => {
        const prevStep = previous(pathname);
        setScreenData(prevStep!);
        navigate(`/${prevStep}`);
    };

    useEffect(() => {
        doInitState(defaultData());
    }, []);

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
                maxStep: pathList.length,
                currentStep: pathList.indexOf(pathname) + 1,
            })}
        </>
    );
}
