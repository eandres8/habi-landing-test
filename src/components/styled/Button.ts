import styled, { StyledComponent } from 'styled-components';

import { THEME } from '../../constants/design';
import { StyledCProps } from '../../interfaces/style-components.type';

export const Button: StyledComponent<'button', StyledCProps, {}, any> 
    = styled.button`
        width: ${(props: any) => props.width || 'auto'};
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.white};
        border: none;
        padding: 10px;
        border-radius: 30px;
        min-width: 200px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: ${(props: any) => props.shadow && props.theme.shadow};
        -webkit-box-shadow: ${(props: any) => props.shadow && props.theme.shadow};
        -moz-box-shadow: ${(props: any) => props.shadow && props.theme.shadow};
    `;

Button.defaultProps = {
    theme: THEME,
};
