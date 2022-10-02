import styled from 'styled-components';

import { THEME } from '../../constants/design';

export const StepButton = styled.button(({ theme }) =>`
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 16px;
    color: ${theme.color.primary};
    background-color: ${theme.color.white};
    border: none;
`);

StepButton.defaultProps = {
    theme: THEME,
};
