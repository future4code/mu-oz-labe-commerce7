import { render } from '@testing-library/react';
import React from 'react'
/* import { ShoppingCartItem } from './ShoppingCartItem' */
import styled from 'styled-components';

const RaizCarrinho = styled.div`
  border: 1px solid black;
  padding: 6px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 6px;
`

export class Carrinho extends React.Component {
  calcularTotal = () => {
    let valorTotal = 0

    for(let i of this.props.productsInCart) {
      valorTotal += i.price * i.quantity
    }

    return valorTotal
  }

  render() {
    return <RaizCarrinho>
      <h3>Carrinho:</h3>
      <CartListContainer>
        {this.props.productsInCart.map((product) => {
          return <ShoppingCartItem 
                    cartItem={product} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </CartListContainer>
      <p>Valor total: R${this.calcularTotal()},00</p>
    </RaizCarrinho>
  }
}






