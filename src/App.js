import React from 'react'
import styled from 'styled-components'
import Fotos from './components/Produtos/Fotos'
import Carrinho from './components/Carrinho/Carrinho'
import ItemDoCarrinho from './components/Carrinho/ItemDoCarrinho'



const Raiz = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 18px;
gap: 6px;
height: 100vh;
`

const Filtragem = styled.div`
border: solid 1px black;
height: 100vh;
`
const Produtos = styled.div`
border: solid 1px black;
 `
 const Compra = styled.div`
 border: solid 1px black;
 `


export default class App extends React.Component {
    state = {
      carrinho: [],
      minimoFiltro: 10,
      maximoFiltro:10000,
      nameFiltro: "produto",
        imagens: [
          {
          id: 1,
          name: " Apollo 11",
          value: 100,
          imageUrl: "https://image.shutterstock.com/image-vector/fly-now-never-typography-tshirt-600w-1683326287.jpg",
          quantidade: 1,
        },
        {
          id: 2,
          name: " Missão  11",
          value: 70,
          imageUrl: "https://image.shutterstock.com/image-vector/astronaut-meow-tshirt-apparel-trendy-600w-1547881007.jpg",
          quantidade: 2,
        },
        {
          id: 3,
          name: "Foguete  Apollo 11",
          value: 49,
          imageUrl: "https://image.shutterstock.com/image-vector/outerspace-adventure-outdoor-vintage-vector-600w-1491399221.jpg",
          quantidade: 3,
        },
        {
          id: 4,
          name: "Foguete  11",
          value: 50,
          imageUrl: "https://image.shutterstock.com/image-vector/give-me-some-space-typography-600w-1743005723.jpg",
          quantidade: 4,
        },
        {
          id: 5,
          name: "Foguete  11",
          value: 65,
          imageUrl: "https://image.shutterstock.com/image-vector/illustration-vector-graphic-cute-astronauts-600w-1786106486.jpg",
          quantidade: 5,
        },
        {
          id: 6,
          name: "Foguete  11",
          value: 70,
          imageUrl: "https://www.camisetas4fun.com.br/media/product/627/camiseta-astronauta-259.jpg",
          quantidade: 6,
        },
        {
          id: 7,
          name: "Foguete  11",
          value: 54,
          imageUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/957/992/products/976667-mlb27426675225_052018-o-004f70d9f4470d2dbb15520786298354-640-0.jpg",
          quantidade: 7,
        },
        
      ],
      
       
      }


      adicionar = (imagem) => {
    const produtoNoCarrinho = this.state.carrinho.find((produtoNoCarrinho) => {
      if (produtoNoCarrinho.id === imagem.id) {
        return true;
      }
      return false;
    });

    if (!produtoNoCarrinho) {
      const novoProdutoNoCarrinho = {
        ...imagem,
        quantidade: 1
      };

      const copiaDoCarrinho = [...this.state.carrinho, novoProdutoNoCarrinho];

      this.setState({ carrinho: copiaDoCarrinho });
    } else {
      const copiaDoCarrinho = this.state.carrinho.map((produtoNoCarrinho) => {
        if (produtoNoCarrinho.id === imagem.id) {
          return {
            ...produtoNoCarrinho,
            quantidade: produtoNoCarrinho.quantidade + 1
          };
        } else {
          return produtoNoCarrinho;
        }
      });
      this.setState({ carrinho: copiaDoCarrinho });
    }
  };
      
    
  render() {
  
    return(
      <Raiz>
        <Filtragem>
        
       </Filtragem>
        <Produtos>
          <Fotos
          imagens={this.state.imagens}
          adicionar={this.adicionar}
          />

        </Produtos>
        <Compra>
            <Carrinho
            imagens={this.state.imagens}
            remover={this.remover}
            />
            
        </Compra>
      </Raiz>
            )
  }
}
