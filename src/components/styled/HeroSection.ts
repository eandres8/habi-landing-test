import styled from 'styled-components';

const pathImg = 'src/assets/apartamentos-HABI-DK.png';

export const HeroSection = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;

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
`;
