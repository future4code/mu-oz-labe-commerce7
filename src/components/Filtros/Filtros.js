import React from 'react'
import styled from 'styled-components'


const FiltroContainer = styled.div`
  background-color: #2E8BC0;
  padding: 8px;
  text-align: center;
  height: 98.5%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
   font-weight: 600;
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


        return(

            <FiltroContainer>
                <p>Filtros</p>
                <InputContainer>
                    <p>Valor Minimo:</p>
                    <input type= "number" value= {this.props.minimoFiltro} onChange= {this.props.onChangeMinimoFiltro}/>
                </InputContainer>
                <InputContainer>
                <p>Valor Maximo:</p>
                    <input type= "number" value= {this.props.maximoFiltro} onChange= {this.props.onChangeMaximoFiltro}/>
                </InputContainer>
                <InputContainer>
                <p>Nome Produto:</p>
                    <input type= "text" value= {this.props.nameFiltro} onChange= {this.props.onChangeNameFiltro}/>
                </InputContainer>
            </FiltroContainer>
        )
    }
}