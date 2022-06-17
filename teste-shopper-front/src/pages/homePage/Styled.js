import styled from "styled-components";

export const Conteiner = styled.div`
 margin-top: 10vh;
  margin-bottom: 2vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const CarrinhoConteiner = styled.div`
 background-color: #E8F9F3;
  margin: 15px;
  grid-column: 2/3;
  height: 90vh;
  border-radius: 5px;
  float:left;
  overflow-y: auto;
  border-radius: 20px;
  `

export const ProdutosCards = styled.div`
background-color: #E8F9F3;
  margin: 15px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  grid-column: 1/2;

`;

export const Paginaçao = styled.div`
  margin: 15px;
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  grid-column: 1/2;
`;

export const ConteinerButton = styled.div`
position: fixed;
  right: 0;
  top: null;
  background-color: white;
  margin: 15px;
  height: 80vh;
  border-radius: 5px;
`