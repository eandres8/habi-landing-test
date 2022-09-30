import { FormFieldHOC } from './FormFieldHOC';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';

export const FormField = Object.assign(FormFieldHOC, {
    Input: FormInput,
    Select: FormSelect,
});