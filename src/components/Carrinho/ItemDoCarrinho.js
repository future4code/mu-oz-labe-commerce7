import React from 'react'


export default class ItemDoCarrinho extends React.Component {


    render() {


            return (<div>
      Carrinho:
      <div>
        {this.props.imagens.map((imagem) => {
          return<ItemDoCarrinho
            imagem={imagem}
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
