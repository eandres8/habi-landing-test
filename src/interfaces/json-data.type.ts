type OptionList = {
    value: string;
    text: string;
};

type FieldStructure = {
    pathname: string;
    description?: string;
    label?: string;
    name: string;
    placeholder?: string;
};

type TextFieldType = FieldStructure & {
    type: 'text' | 'email';
};

type RangeFieldType = FieldStructure & {
    type: 'range';
    min: number;
    max: number;
    default?: number;
};

type CheckboxFieldType = FieldStructure & {
    type: 'checkbox';
    options: OptionList[];
    default?: string;
};

type CurrencyFieldType = FieldStructure & {
    type: 'currency';
    currency: string;
};

type FileFieldType = FieldStructure & {
    type: 'file';
    files: string[];
    size: string;
};

type ToggleOption = {
    name: string;
    value: boolean;
    text: string;
    dependence?: string;
};

type ToggleFieldType = FieldStructure & {
    type: 'toggle';
    options: ToggleOption[];
};

export type JsonData = TextFieldType | RangeFieldType | CheckboxFieldType | CurrencyFieldType | FileFieldType | ToggleFieldType;
