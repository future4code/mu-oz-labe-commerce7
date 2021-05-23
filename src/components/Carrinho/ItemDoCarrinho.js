import React from 'react'
import ItemDoCarrinho from './ItemDoCarrinho'



export default class Carrinho extends React.Component {
 totalValor = () => {
     let valor = 0
     for(let imagem of this.props.imagens){
     valor += imagem.valor * imagem.quantidade
     }
     return valor
 }
    render() {
    return (<div>
          <h3> produtos</h3>
          {this.props.carrinho.map((product) => {
            return (
              <div>
                <p>
                  {product.name} - R${product.value * product.quantidade} -{" "}
                  {product.quantidade}x
                </p>
                <button onClick={() => this.props.remover(this.props.imagem)}>Remover do carrinho</button>
              </div>
            );
          })}
        </div>
    )
  }
}