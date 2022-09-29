import styled from 'styled-components';

const pathImg = 'src/assets/apartamentos-HABI-DK.png';
import { THEME } from '../../constants/design';

export const HeroSection = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${pathImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }

    & > .hero-content {
        position: relative;
        margin-top: 15%;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 24px;
    color: ${props => props.theme.color.white};
    width: 300px;
    text-align: center;
`;

export const HeroParagraph = styled.p`
    color: ${props => props.theme.color.white};
    max-width: 450px;
    text-align: center;
`;

HeroTitle.defaultProps = {
    theme: THEME,
}

HeroParagraph.defaultProps = {
    theme: THEME,
}