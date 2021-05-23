import React from 'react'
import styled from 'styled-components'
import Fotos from './components/Produtos/Fotos'
import Carrinho from './components/Carrinho/Carrinho'
import Filtros from './components/Filtros/Filtros'



const Raiz = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 18px;
gap: 6px;
height: 100vh;
`

const Filtragem = styled.div`
border: solid 1px black;

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
      minimoFiltro: 0,
      maximoFiltro:2000,
      nameFiltro: "",
        imagens: [
          {
          id: 1,
          name: " Homem na Lua",
          value: 100,
          imageUrl: "https://cdn.awsli.com.br/600x450/1081/1081393/produto/86832467e0c2eae01e.jpg",
          quantidade: 1,
        },
        {
          id: 2,
          name: "Astronauta numa Boa",
          value: 70,
          imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/azul-marinho1-7f78c7f70c1f7e618116136551726503-1024-1024.png",
          quantidade: 2,
        },
        {
          id: 3,
          name: "Planetas",
          value: 49,
          imageUrl: "https://ae01.alicdn.com/kf/H85d11f475e674f16888c75482f5f16fda/Espa-o-gal-xia-planeta-universo-3d-impresso-camiseta-das-senhoras-dos-homens-crian-as-c.jpg_q50.jpg",
          quantidade: 3,
        },
        {
          id: 4,
          name: "Lua Decrescente",
          value: 50,
          imageUrl: "https://www.guller.com.br/7526-large_default/camiseta-escava%C3%A7%C3%A3o-da-lua-3d-imprens%C3%A3o-fashion-estampada-moda-ver%C3%A3o-b%C3%A1sica-masculina.jpg",
          quantidade: 4,
        },
        {
          id: 5,
          name: "Astro Pug",
          value: 65,
          imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_pug_cachorro_astronauta_nasa_espaco_preta_ev_77291_1_01632588664f2a84bf069dd265847847.jpg",
          quantidade: 5,
        },
        {
          id: 6,
          name: "A criação",
          value: 78,
          imageUrl: "https://www.camisetas4fun.com.br/media/product/627/camiseta-astronauta-259.jpg",
          quantidade: 6,
        },
        {
          id: 7,
          name: "Astro Cat",
          value: 54,
          imageUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/957/992/products/976667-mlb27426675225_052018-o-004f70d9f4470d2dbb15520786298354-640-0.jpg",
          quantidade: 7,
        },
        
      ],
      
       
      }

      onChangeMinimoFiltro = (event) => {
    this.setState({minimoFiltro: event.target.value})
  }

      onChangeMaximoFiltro = (event) => {
        this.setState({maximoFiltro: event.target.value})
      }

      onChangeNameFiltro = (event) => {
        this.setState({nameFiltro: event.target.value})
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

   remover = (imagemId) => {
     
      const removido = this.state.carrinho.map((imagem) => {
        
        if(imagemId === imagem.Id ) {
          
          return {
            ...imagem,
            quantidade: imagem.quantidade - 1
          }
          
        }
        return imagem
         
      }).filter((imagem) => imagem.quantidade > 0)
      this.setState({carrinho: removido})
      
    }
    
      
    
  render() {

    
  
    return(
      <Raiz>
        <Filtragem>
        
        
        <Filtros
        minimoFiltro={this.state.minimoFiltro}
        maximoFiltro={this.state.maximoFiltro}
        nameFiltro={this.state.nameFiltro}
        onChangeMinimoFiltro={this.onChangeMinimoFiltro}            
        onChangeMaximoFiltro={this.onChangeMaximoFiltro}            
        onChangeNameFiltro={this.onChangeNameFiltro}  
        />
        
       </Filtragem>
        <Produtos>
        
          <Fotos
          imagens={this.state.imagens}
          adicionar={this.adicionar}
          minimoFiltro={this.state.minimoFiltro}
          maximoFiltro={this.state.maximoFiltro}
          nameFiltro={this.state.nameFiltro}
          />

        </Produtos>
        <Compra>
            <Carrinho
            imagens={this.state.imagens}
            remover={this.remover}
            carrinho={this.state.carrinho}
            
            />
            
        </Compra>
      </Raiz>
            )
  }
}
