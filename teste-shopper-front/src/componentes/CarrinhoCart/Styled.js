import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 25vw;
  margin: 10px 30px 30px 30px;
  border-radius: 20px;
  box-shadow:  7px 7px 12px #b8b8b8,
             -7px -7px 12px #bcbcbc;
  background: #cfcfcf;
`;

export const PostCardContent = styled.div`
display: flex;
  min-height: 10vh;
  font-family: 'Dosis', sans-serif;
`;

export const LeftContent  = styled.div`
margin-bottom: 15px;
padding: 5px;
font-size: small;
`;

export const NomeProduto = styled.p`
   white-space: nowrap; 
    width: 15em; 
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ValorProduto = styled.p`
`

export const Quantidade = styled.div`
padding: 3px;
`

export const RightContent = styled.div`
display: flex;
justify-content: right;
margin: 0px 20px 0px 20px;
align-items: center;
`;

export const Botão = styled.button`
    background-color: #20ab77;
    border: none;
    border-radius: 4px;
    color: #E8F9F3;
    font-family: 'Dosis', sans-serif;
    font-size: 14px;
    padding: 0 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
`;