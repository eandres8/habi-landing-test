import { useNavigate } from 'react-router-dom';

import { HeroSection, Button, HeroParagraph, HeroTitle } from '../components/styled';
import { PageContainer } from '../components/shared/';
import { useManageUrls } from '../hooks/useManageUrls';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathList } = useManageUrls();

  const startSell = () => navigate(`/${pathList.at(0)}`);

  return (
    <PageContainer>
      <HeroSection>
        <div className='hero-content d-flex justify-content-center align-items-center flex-direction-column'>
          <HeroTitle>Compramos tu vivienda en 10 días</HeroTitle>
          <HeroParagraph>
            Solicita una oferta gratis ingresando la dirección, caracteristicas
            del inmueble y tus datos de contacto. Uno de nuestros expertos te
            hará una oferta.
          </HeroParagraph>
          <div style={{ marginTop: 15 }}>
            <Button width="400px" onClick={startSell}>Vender</Button>
          </div>
        </div>
      </HeroSection>
    </PageContainer>
  );
};
