import styled from "styled-components";
import { Link } from "react-router-dom";

const textOptions = ["CATEGORIAS", "FAVORITOS", "ESTANTE"]; // Array que será utilizada na 'li'

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 0 5px;
  color: white;
`;

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Link to={`/${text.toLowerCase()}`}><Option><p>{text}</p></Option></Link>
      ))}
    </Options>
  );
}

//O '<Link>' envolvido ao redor da '<Option>' e dentro do map serve para em cada opção selecionada faça com que navegue nessa opção já com o link alterado, por ex: se clicar na opção Favoritos ele transfira para a página favoritos (http://localhost:3000/favoritos). 

//O 'to={`${text}`}': serve para cada opção selecionada altere a página desejada no link, por ex: se clicar em Favoritos no Header vá para a página da opção (http://localhost:3000/favoritos).

//O 'text' representa cada um dos itens do array 'textOptions' e o 'map' itera sobre cada um deles (passa opçao por opção na array 'textOptions'.

//O 'text.toLowerCase()' serve para que o link fique em minusculo,

export default OptionsHeader;
