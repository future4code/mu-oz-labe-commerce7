import React from 'react'
import styled from 'styled-components'

const ProdutoCont = styled.div`
text-align: center;
border: solid 1px black;
`

const CardProduto = styled.div`
display: flex;

padding: 20px;

margem-bottom: 10px;
`
const ImagemCard = styled.img`
width: 500px;
`


export default class Fotos extends React.Component {
  render() {
    return (
      <ProdutoCont>
        <h3>Lista de produtos</h3>
        <div>
          {this.props.imagens.map((imagem) => {
          return (
            <CardProduto>
              <ImagemCard src={imagem.imageUrl} />
              <p>
                {imagem.name} 
              </p>
              <p>
              R${imagem.value}
              </p>
              
              <button onClick={() => this.props.adicionar(imagem)}>
                Adicionar ao carrinho
              </button>
              
            </CardProduto>
          );
        })}</div>
        
      </ProdutoCont>
    )
  }
}