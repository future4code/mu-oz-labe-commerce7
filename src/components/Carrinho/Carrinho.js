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
      Carrinho:
      <div>
        {this.props.imagens.map((imagem) => {
          return<ItemDoCarrinho
            foto={imagem}
            remover={this.props.remover}
            
            />
          
        })}
        <div>
          <p>Valor Total: R${this.totalValor()},00</p>
        </div>
      </div>
    </div>
      
    )
    
  }
}