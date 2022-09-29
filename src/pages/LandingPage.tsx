import ImageHabi from '../assets/habi.svg';
import { HeroSection, Navbar, Button, HeroParagraph, HeroTitle } from '../components/styled';

export const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar>
        <img src={ImageHabi} alt="habi Icon" />
      </Navbar>
      <HeroSection>
        <div className='hero-content d-flex justify-content-center align-items-center flex-direction-column'>
          <HeroTitle>Compramos tu vivienda en 10 días</HeroTitle>
          <HeroParagraph>
            Solicita una oferta gratis ingresando la dirección, caracteristicas
            del inmueble y tus datos de contacto. Uno de nuestros expertos te
            hará una oferta.
          </HeroParagraph>
          <div style={{ marginTop: 15 }}>
            <Button width="400px">Vender</Button>
          </div>
        </div>
      </HeroSection>
    </div>
  );
};
