import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos } from "../servicos/favoritos";
import { TituloContainer } from "../components/Titulo";
import imageem from "../imgs/livro.png";

const AppContainer = styled.div`
  color: #fff;
  height: 100vh;
  width: 100vw;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  display: flex;
`;

const Livros = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const FavoritosContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  &:hover ${Livros}:not(:hover) {
    filter: blur(4px);
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

export const TituloLivro = styled.h1`
  font-size: 20px;
  background-color: #f6ac24;
  color: black;
  margin-left: 5px;
  margin-right: 5px;
  width: 100%;
  text-align: center;
`;

const ImgLivro = styled.img`
  width: 220px;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <TituloContainer cor="#000" tamanhoFonte="30px">
        SEUS LIVROS FAVORITOS
      </TituloContainer>
      <FavoritosContainer>
        {favoritos.map(
          (
            favorito //Puxa os favoritos
          ) => (
            <Livros>
              <TituloLivro>{favorito.nome}</TituloLivro>
              <ImgLivro src={imageem} alt="image-book" />
            </Livros>
          )
        )}
      </FavoritosContainer>
    </AppContainer>
  );
}

export default Favoritos;
