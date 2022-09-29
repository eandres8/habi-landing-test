import styled from 'styled-components';

import { THEME } from '../../constants/design';

export const Navbar = styled.nav`
    margin: 0;
    padding: 15px;
    display: flex;
    justify-content: center;
    box-shadow: ${props => props.theme.shadow};
`;

Navbar.defaultProps = {
    theme: THEME,
}
