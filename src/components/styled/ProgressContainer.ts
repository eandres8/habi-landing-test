import styled, { StyledComponent } from 'styled-components';

import { THEME } from '../../constants/design';
import { StyledCProps } from '../../interfaces/style-components.type';

export const ProgressContainer: StyledComponent<'div', StyledCProps, {}, any> 
    = styled.div`
        width: ${(props: StyledCProps) => props.width || 'auto'};

        progress[value] {
            width: 100%;
            appearance: none;

            ::-webkit-progress-bar {
                height: 10px;
                border-radius: 20px;
                background-color: #eee;
            }

            ::-webkit-progress-value {
                height: 10px;
                border-radius: 20px;
                background-color: ${props => props.theme.color.primary};
            }
        }
    `;

ProgressContainer.defaultProps = {
    theme: THEME,
}
