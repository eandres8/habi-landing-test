import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../store.types';
import { setFormValue, setInitState } from './form-slice';
import { FormState } from './form-state.types';

export const useFormFacade = () => {
  const dispatch = useDispatch();
  const { data } = useSelector<AppState, FormState>(state => state.form);

  const doSetFormValue = (key: string, value: any) => dispatch(setFormValue({ key, value }));

  const doSetInitValue = (initState: any) => dispatch(setInitState({ data: initState }));

  return {
    data,
    doSetFormValue,
    doSetInitValue,
  };
};
