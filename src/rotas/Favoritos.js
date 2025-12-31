import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos, deletarLivro } from "../servicos/favoritos";
import { TituloContainer } from "../components/Titulo";
import imgBook from "../imgs/livro.png";
import FavoriteIcon from "../imgs/favorite-icon.png";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  display: flex;
  background-color: #171717;
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
  background-color: #1c1c1c;
  border-radius: 25px;

  &:has(${Livros}:hover) ${Livros}:not(:hover) {
    filter: blur(4px);
    opacity: 0.5;
    transform: scale(0.95);
    background-color: red;
  }
`;

export const TituloLivro = styled.h1`
  font-size: 20px;
  background-color: #f6ac24;
  color: #1c1c1c;
  margin-left: 5px;
  margin-right: 5px;
  width: 100%;
  text-align: center;
`;

const ImgLivro = styled.img`
  width: 220px;
`;

const IconFavorite = styled.img`
  width: 30px;
  position: absolute;
  top: 10px;
  right: 15px;

  :hover {
    transition: 0.3s;
    background-color: aliceblue;
  }
`;

const LivrosIMG = styled.div`
  position: relative;
  width: 220px;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  async function deleteFavorito(id) {
    await deletarLivro(id);
    await fetchFavoritos();
    alert(`Livro de id: ${id} deletado com sucesso!`);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <TituloContainer cor="#ffffff" tamanhoFonte="30px">
        SEUS LIVROS FAVORITOS
      </TituloContainer>
      <FavoritosContainer>
        {favoritos.map(
          (
            favorito //Puxa os favoritos
          ) => (
            <Livros onClick={() => deleteFavorito(favorito.id)}>
              <TituloLivro>{favorito.nome}</TituloLivro>
              <LivrosIMG>
                <ImgLivro src={imgBook} alt="image-book" />
                <IconFavorite src={FavoriteIcon} alt="teste" />
              </LivrosIMG>
            </Livros>
          )
        )}
      </FavoritosContainer>
    </AppContainer>
  );
}

export default Favoritos;
