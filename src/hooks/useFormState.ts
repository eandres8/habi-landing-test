import { useFormFacade } from '../store/modules/useFormFacade';


export const useFormState = () => {
  const { data, doSetFormValue, doSetInitValue } = useFormFacade();

  const setDataToNextStep = (key: string, value: any) => {
    doSetFormValue( key, value );
  };

  const doInitState = (initState: any) => {
    doSetInitValue(initState );
  };

  return {
    setDataToNextStep,
    doInitState,
    storeData: data,
  };
}
