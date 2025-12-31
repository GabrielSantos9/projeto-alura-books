import logo from '../../imgs/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

 const LogoImg = styled.img`
  margin-right: 10px;
 `;

  const TextoLogo = styled.p`
   color: white;
   text-decoration: none !important;
  `;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo"/>
      <TextoLogo><strong>Alura</strong>Books</TextoLogo>
    </LogoContainer>
  )
}

export default Logo;