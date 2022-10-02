export type OptionList = {
    value: string;
    text: string;
};

export type FieldStructure = {
    pathname: string;
    description?: string;
    label?: string;
    name: string;
    placeholder?: string;
};

export type TextFieldType = FieldStructure & {
    type: 'text' | 'email';
    default?: string;
};

export type RangeFieldType = FieldStructure & {
    type: 'range';
    min: number;
    max: number;
    default?: number;
};

export type CheckboxFieldType = FieldStructure & {
    type: 'checkbox';
    options: OptionList[];
    default?: any[];
};

export type CurrencyFieldType = FieldStructure & {
    type: 'currency';
    currency: string;
    default?: number;
};

export type FileFieldType = FieldStructure & {
    type: 'file';
    files: string[];
    size: string;
    default?: any;
};

export type ToggleOption = {
    name: string;
    value: boolean;
    text: string;
    dependence?: string;
};

export type ToggleFieldType = FieldStructure & {
    type: 'toggle';
    options: ToggleOption[];
    default?: any[];
};

export type JsonData = TextFieldType | RangeFieldType | CheckboxFieldType | CurrencyFieldType | FileFieldType | ToggleFieldType;
