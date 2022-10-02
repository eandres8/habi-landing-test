import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../store';
import { setFormValue, setInitState } from '../store/modules/form-slice';
import { FormState } from '../store/modules/form-state.types';

export const useFormState = () => {
  const dispatch = useDispatch();
  const { data } = useSelector<AppState, FormState>(state => state.form);

  const setDataToNextStep = (key: string, value: any) => {
    dispatch(setFormValue({ key, value }));
  };

  const doInitState = (initState: any) => {
    dispatch(setInitState({ data: initState }));
  };

  return {
    setDataToNextStep,
    doInitState,
    storeData: data,
  };
}
