import { FormType } from '../../interfaces/form';

export type FormState = {
    data: { [key: string]: any },
    currentStep: number,
    maxStep: number,
};

export interface FormReducers {
    setFormValue: (state: FormState, action: any) => any;
}
