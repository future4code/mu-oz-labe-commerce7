import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0.2em 0.3em;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background-color: rgb(136, 34, 136);
  &:hover {
    color: rgb(136, 34, 136);
    border: 0.1em solid rgb(136, 34, 136);
    background-color: #ffffff;
  }
`;

const Card = styled.div`
  box-shadow: 2px 2px 4px rgba(136, 34, 136, 1);
  padding: 0.4em 0;
`;

export default class CartãoDoProduto extends React.Component {
  render() {
    const produto = this.props.produtos;
    return (
      <div>
        <Card>
          <img src={produto.ImageUrl} />
          <div>R$ {produto.value}</div>
          <div>{produto.name}</div>
          <Buttons onClick={() => this.props.adicionarAoCarrinho(produto.id)}>
            Adicionar ao carrinho
          </Buttons>
        </Card>
      </div>
    );
  }
}
