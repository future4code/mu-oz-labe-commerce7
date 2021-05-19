import React from 'react'
import styled from 'styled-components';

const RaizFiltro = styled.div`
  border: 1px solid black;
  padding: 8px;
  height: 100vh;
`;



const InputFiltro = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`

export class Filtros extends React.Component {
  render() {
    return <RaizFiltro>
      <h3>Filtros</h3>
        <InputFiltro>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputFiltro>
        <InputFiltro>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputFiltro>
        <InputFiltro>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputFiltro>
    </RaizFiltro>
  }
}
