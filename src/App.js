import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Filtros} from './components/filtros/filtro'
import {Carrinho} from './components/carrinho/carrinhoDeCompras'

const Raiz = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 18px;
gap: 6px;
heigth: 100vh;
`


const Produtos = styled.div`
border: solid 1px black;
`

const products = [
  {
    id: 1,
    name: 'Produto legal',
    price: 123,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 200,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 10,
    photo: 'https://picsum.photos/200/200?a=4'
  }
]

class App extends React.Component {
  state = {
    minFilter: 0,
    maxFilter: 0,
    nameFilter: '',
    productsInCart: [
      {
        id: 4,
        name: 'Produto 4',
        price: 10,
        photo: 'https://picsum.photos/200/200?a=4',
        quantity: 1
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30,
        photo: 'https://picsum.photos/200/200?a=3',
        quantity: 2
      }
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <Raiz>
        <Filtros
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Produtos 
          
          onAddProductToCart={this.onAddProductToCart}
        />
        <Carrinho
          
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </Raiz>
    );
  }
}

export default App;


