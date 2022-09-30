import styled, { StyledComponent } from 'styled-components';

import { StyledCProps } from '../../interfaces/style-components.type';
import { THEME } from '../../constants/design';

export const Paragraph: StyledComponent<'p', StyledCProps, {}, any>  
    = styled.p`
        font-weight: 600;
        font-size: 16px;
        color: ${props => props.theme.color.primary};
    `;

Paragraph.defaultProps = {
    theme: THEME
};
