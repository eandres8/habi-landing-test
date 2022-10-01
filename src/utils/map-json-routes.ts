import {
    CheckboxFieldType,
    CurrencyFieldType,
    FileFieldType,
    JsonData,
    OptionList,
    RangeFieldType,
    TextFieldType,
    ToggleFieldType,
    ToggleOption,
} from '../interfaces/json-data.type';

const mapText = (item: any): TextFieldType => ({
    type: item.type,
    pathname: item.pathname || '',
    description: item.description || '',
    label: item.label || '',
    name: item.name || '',
    placeholder: item.placeholder || '',
});

const mapRange = (item: any): RangeFieldType => ({
    type: item.type,
    pathname: item.pathname || '',
    description: item.description || '',
    label: item.label || '',
    name: item.name || '',
    min: item.min || 1,
    max: item.max || 10,
    default: item.default || 1,
});

const mapCheckboxOption = (options: any): OptionList[] => {
    return Array.isArray(options)
        ? options.map((option: any) => ({
            value: option.value || '',
            text: option.text || '',
        }))
        : [];
}

const mapCheckbox = (item: any): CheckboxFieldType => ({
    type: item.type,
    pathname: item.pathname || '',
    description: item.description || '',
    label: item.label || '',
    name: item.name || '',
    options: mapCheckboxOption(item.options),
});

const mapTootleOption = (options: any): ToggleOption[] => {
    return Array.isArray(options)
        ? options.map((option: any, idx: number) => ({
            value: option.value || '',
            text: option.text || '',
            name: option.name || '',
            dependence: option.dependence || '',
        }))
        : [];
}

const mapToggle = (item: any): ToggleFieldType => ({
    type: item.type,
    pathname: item.pathname || '',
    description: item.description || '',
    label: item.label || '',
    name: item.name || '',
    options: mapTootleOption(item.options),
});

const mapCurrency = (item: any): CurrencyFieldType => ({
    type: item.type,
    pathname: item.pathname || '',
    description: item.description || '',
    label: item.label || '',
    name: item.name || '',
    placeholder: item.placeholder || '',
    currency: item.currency || '',
});

const mapFileOption = (options: any): string[] => {
    return Array.isArray(options)
        ? options
        : [];
}

const mapFile = (item: any): FileFieldType => ({
    type: item.type,
    pathname: item.pathname || '',
    description: item.description || '',
    label: item.label || '',
    name: item.name || '',
    files: mapFileOption(item.files),
    size: item.size || '',
});

const mapDataOption: Record<string, Function> = {
    text: mapText,
    email: mapText,
    range: mapRange,
    checkbox: mapCheckbox,
    toggle: mapToggle,
    currency: mapCurrency,
    file: mapFile,
};

export const mapJsonRoutes = (paths: any): JsonData[] => {
    return paths.map((path: any) => 
        mapDataOption[path.type] 
            ? mapDataOption[path.type](path)
            : { type: 'error' }
        ).filter((item: any) => item.type !== 'error' );
};