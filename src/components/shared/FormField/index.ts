import { FormFieldHOC } from './FormFieldHOC';
import { FormControl } from './FormControl';
import { FormInput } from './FormInput';
import { FormEmail } from './FormEmail';
import { FormRange } from './FormRange';
import { FormCheckbox } from './FormCheckbox';
import { FormToggleSwitch } from './FormToggleSwitch';
import { FormCurrency } from './FormCurrency';
import { FormFile } from './FormFile';

export const FormField = Object.assign(FormFieldHOC, {
    Input: FormInput,
    Control: FormControl,
    Email: FormEmail,
    Range: FormRange,
    Checkbox: FormCheckbox,
    ToggleSwitch: FormToggleSwitch,
    Currency: FormCurrency,
    File: FormFile,
});