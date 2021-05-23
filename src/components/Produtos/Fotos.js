import React from 'react'
import styled from 'styled-components'


const CorpoCard = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 16px;
`;
const Imagem = styled.img`
width: 200px;
height: 200px;
border-radius: 10px;
 `
const Botao = styled.button`
 width: 100px;
 align-self: center;
 border-radius: 10px;
  `
const Card = styled.div`
display: flex;
 `
const CorpoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 10px;
 `
 const Ordenar = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-right: 10px;
  `
const Container = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 `
 const Paragrafo = styled.button`
 align-self: center;
 margin: 10px;
 border: none;
  `
const Background = styled.div `
background-color: #B1D4E0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 20px;
font-weight: 600;
 `
 const Select = styled.select `
 margin-top: 5px;
  `
export default class Fotos extends React.Component {

  state = {

    sort: "DECRESCENTE"
  }


  onChangeOrdenacao = (e) => {
    this.setState({ sort: e.target.value })
  }


  render() {
    const listaFiltrada = this.props.imagens.filter((imagem) => {

      if (imagem.value > this.props.minimoFiltro) {
        return true;
      } else {
        return false;
      }
    })
      .filter((imagem) => {
        if (imagem.value <= this.props.maximoFiltro) {
          return true;
        } else {
          return false;
        }
      })
      .filter((imagem) => {
        if (
          imagem.name
            .toLowerCase()
            .includes(this.props.nameFiltro.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)


    return (

      <Background>
        <CorpoContainer>
          <p>Quantidade de Produtos: {listaFiltrada.length}</p>
          <Ordenar>
          <p>Ordenação:</p>
          
          <Select value={this.state.sort} onChange={this.onChangeOrdenacao}>
            <option value="CRESCENTE">Crescente</option>
            <option value="DECRESCENTE">Decrescente</option>
          </Select>

          </Ordenar>
        </CorpoContainer>
        <Container>
          {listaFiltrada.map((imagem) => {

            return (

              <Card>
                <CorpoCard>
                  <Imagem src={imagem.imageUrl} />
                  <Paragrafo>
                    {imagem.name} - R${imagem.value}
                  </Paragrafo>
                  <Botao onClick={() => this.props.adicionar(imagem)}>
                    Adicionar ao carrinho
                        </Botao>
                </CorpoCard>
              </Card>
            );
          })}
        </Container>

      </Background>
    )

  }
}