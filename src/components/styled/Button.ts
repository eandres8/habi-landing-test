import styled from 'styled-components';

import { THEME } from '../../constants/design';

export const Button = styled.button(({ theme }) => `
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    border: none;
    padding: 10px;
    border-radius: 30px;
    min-width: 200px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: ${theme.shadow};
    -webkit-box-shadow: ${theme.shadow};
    -moz-box-shadow: ${theme.shadow};
`);

Button.defaultProps = {
    theme: THEME,
};
