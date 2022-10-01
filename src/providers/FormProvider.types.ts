import { NavigateFunction } from 'react-router-dom';

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
    previus: () => void;
    pathname: string;
}

export interface FormProviderProps {
    children: (props: ChildrenProps) => React.ReactNode;
}