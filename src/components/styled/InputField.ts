import styled from 'styled-components';

import { THEME } from '../../constants/design';

export const InputField = styled.input(({ theme }) =>`
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 16px;
    color: ${theme.color.dark};
    border: 1px solid ${theme.color.grey};

    &:focus {
        outline: none;
        border: 1px solid ${theme.color.primary};
    }
`);

InputField.defaultProps = {
    theme: THEME,
};
