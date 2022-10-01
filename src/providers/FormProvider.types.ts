import { NavigateFunction } from 'react-router-dom';
import { JsonData } from '../interfaces/json-data.type';

export type FormFieldData = {
    pathname: string;
    target: string;
    label: string;
    value: string;
};

export type NextStepType = {
    pathname: string,
    key: string,
    value: any,
};

export interface ChildrenProps {
    navigate: NavigateFunction;
    next: (props: NextStepType) => void;
    previous: () => void;
    pathname: string;
    data: JsonData,
}

export interface FormProviderProps {
    children: (props: ChildrenProps) => React.ReactNode;
}