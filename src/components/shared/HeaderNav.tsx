import ImageHabi from '../../assets/habi.svg';
import { Navbar } from '../styled';

export const HeaderNav: React.FC = () => {
  return (
    <Navbar>
      <img src={ImageHabi} alt="habi Icon" />
    </Navbar>
  );
}
