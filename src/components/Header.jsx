import logo from '../assets/logo.png';
import { styled } from "styled-components";

const TituloComponentStyled = styled.h1` //gera um novoo component
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: 'Pacifico', cursive;
  margin: 0;

`

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <TituloComponentStyled>ReactArt</TituloComponentStyled>
      {/* <h1>ReactArt</h1> */}
      <p className='uppercase'> A community of artists and art-lovers.</p>
    </header>
  );
}
