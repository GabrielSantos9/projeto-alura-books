import styled from "styled-components";
import Pesquisa from "../components/Pesquisa";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
