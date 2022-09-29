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
    box-shadow: 0px 3px 6px 2px rgba(148,148,148,0.68);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(148,148,148,0.68);
    -moz-box-shadow: 0px 3px 6px 2px rgba(148,148,148,0.68);
`);

Button.defaultProps = {
    theme: THEME,
};
