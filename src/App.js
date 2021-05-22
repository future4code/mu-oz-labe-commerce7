import React from 'react'
import styled from 'styled-components'




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
      minimoFiltro: 10,
      maximoFiltro:10000,
      nameFiltro: "produto",
        imagens: [
          {
          id: 1,
          name: "Foguete da Missão Apollo 11",
          value: 8000.0,
          imageUrl: "https://picsum.photos/id/1003/367/267",
          quantidade: 1,
        },
        {
          id: 2,
          name: "Foguete da Missão Apollo 11",
          value: 14000.0,
          imageUrl: "https://picsum.photos/id/1006/367/267",
          quantidade: 2,
        },
        {
          id: 3,
          name: "Foguete da Missão Apollo 11",
          value: 2000,
          imageUrl: "https://picsum.photos/id/1005/367/267",
          quantidade: 3,
        },
        {
          id: 4,
          name: "Foguete da Missão Apollo 11",
          value: 5000,
          imageUrl: "https://picsum.photos/200/200",
          quantidade: 4,
        }
      ],
       
      }
    
    
  render() {
  
    return(
      <Raiz>
        <Filtragem>
         
       </Filtragem>
        <Produtos>
        </Produtos>
            <Compra>
            <Carrinho
              remover={this.remover}
              imagens={this.state.imagens}
              
            />
            </Compra>
            </Raiz>
            )
  }
}
