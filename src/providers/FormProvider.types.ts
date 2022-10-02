import { NavigateFunction } from 'react-router-dom';
import { JsonData } from '../interfaces/json-data.type';

export type FormFieldData = {
    pathname: string;
    target: string;
    label: string;
    value: string;
};

export type NextStepType = {
    pathname: string;
    key: string;
    value: any;
};

export interface ChildrenProps {
    navigate: NavigateFunction;
    nextTo: () => void;
    previousTo: () => void;
    pathname: string;
    data: JsonData;
    value: any;
    setValue: (value: any) => void;
    maxStep: number;
    currentStep: number;
}

export interface FormProviderProps {
    children: (props: ChildrenProps) => React.ReactNode;
}