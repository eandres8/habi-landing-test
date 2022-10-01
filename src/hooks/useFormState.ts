import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../state';
import { setFormValue } from '../state/modules/form-slice';
import { FormState } from '../state/modules/form.types';

export const useFormState = () => {
  const dispatch = useDispatch();
  const {  } = useSelector<AppState, FormState>(state => state.form);

  const setDataToNextStep = (key: string, value: any) => {
    dispatch(setFormValue({ key, value }));
  };

  return {
    setDataToNextStep,
  };
}
