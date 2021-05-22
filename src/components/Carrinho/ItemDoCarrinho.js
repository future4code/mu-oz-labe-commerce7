import React from 'react'


export default class ItemDoCarrinho extends React.Component {


   render(){
     return(
       <div>
         <p>{this.props.foto.quantidade}X</p>
         <p>{this.props.foto.name}</p>
         <button onClick={() => this.props.remover(this.props.foto.id)}>remover</button>
       </div>
     )
   }
  }
