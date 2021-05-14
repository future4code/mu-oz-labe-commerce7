import React from 'react';
import './App.css';
import styled from 'styled-components';

const Raiz = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 18px;
gap: 6px;
heigth: 100vh;
`

const Filtros = styled.div`
border: solid 1px black;
height: 100vh;
`
const Produtos = styled.div`
border: solid 1px black;
`
const Carrinho = styled.div`
border: solid 1px black;
`


function App() {
  return (
    <Raiz>
      <Filtros>
        filtro
      </Filtros>

      <Produtos>
        Produtos
      </Produtos>

      <Carrinho>
        Carrinho
      </Carrinho>
      
    </Raiz>
  );
}

export default App;
