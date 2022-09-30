import { NavigateFunction, useNavigate } from 'react-router-dom';

interface ChildrenProps {
    navigate: NavigateFunction;
}

interface Props {
    children: (props: ChildrenProps) => React.ReactNode;
}

export const FormProvider: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();


    return (
        <>
            {children({
                navigate,
            })}
        </>
    );
}
