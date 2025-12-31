import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconsHeader from "../IconsHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #000000ed;
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoLink to="/">
       <Logo />
      </LogoLink>
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}

//O '<Link>' envolvido ao redor do '<Logo>' serve para ao clicar na logo do site ele volte para a Home.

export default Header;
