import React from 'react'
import styled from 'styled-components'



export default class ItemCarrinho extends React.Component {


    
   render(){
     return(
       <div>
         <p>{this.props.imagem.quantidade}X</p>
         <p>{this.props.imagem.name}</p>
         <button onClick={() => this.props.remover(this.props.imagem.id)}>remover</button>
       </div>
     )
   }
  }
