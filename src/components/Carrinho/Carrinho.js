import React from 'react'
import styled from 'styled-components'


const CarrinhoContainer = styled.div`
  background-color: #2E8BC0;
  padding: 8px;
  text-align: center;
  height: 98.5%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-size: 20px;
   font-weight: 600;
`;
const Imagem = styled.img `
width: 100px;
height: 100px;
 `

export default class Carrinho extends React.Component {
 
 totalValor = () => {
     let valorTotal = 0;


     for(let produtoNoCarrinho of this.props.carrinho){

     valorTotal += produtoNoCarrinho.value * produtoNoCarrinho.quantidade
     }
     return valorTotal
     
 }
 
    
    render() {
      
    return (<CarrinhoContainer>
          <Imagem src="https://cdn.icon-icons.com/icons2/1456/PNG/512/mbricartadd_99553.png"></Imagem>
          
          
          {this.props.carrinho.map((imagem) => {
            return (
              <div>
                <p>
                  {imagem.name} - R${imagem.value * imagem.quantidade} -{" "}
                  {imagem.quantidade}x
                </p>
                
                <button onClick={() => this.props.remover(this.props.imagem)}>Remover do carrinho</button>
                
              </div>
            );
          })}
          <div>
          <p>Valor Total: R${this.totalValor()},00</p>
          </div>
        
        </CarrinhoContainer>
        
    )
    
  }
}