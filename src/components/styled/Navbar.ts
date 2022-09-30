import styled from 'styled-components';

import { THEME } from '../../constants/design';

export const Navbar = styled.nav`
    margin: 0;
    padding: 20px 15px;
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 50px;
    justify-content: center;
    box-shadow: ${props => props.theme.shadow};
    background-color: ${props => props.theme.color.white};

    & > img {
        width: 50px;
    }
`;

Navbar.defaultProps = {
    theme: THEME,
}
