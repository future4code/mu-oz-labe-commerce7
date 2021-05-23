import React from 'react'
import styled from 'styled-components';

const FiltroContainer = styled.div`
  
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  margin-left: 35px;
`

export default class Filtros extends React.Component {
  render() {
    return <FiltroContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minimoFiltro}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.maximoFiltro}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFiltro}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
        {/* <button onClick={this.props.onFilter()}>Filtrar</button> */}
    </FiltroContainer>
  }
}
