import { FormFieldHOC } from './FormFieldHOC';
import { FormControl } from './FormControl';
import { FormInput } from './FormInput';
import { FormEmail } from './FormEmail';
import { FormRange } from './FormRange';

export const FormField = Object.assign(FormFieldHOC, {
    Input: FormInput,
    Control: FormControl,
    Email: FormEmail,
    Range: FormRange,
});