import React from 'react'


export default class Fotos extends React.Component {




    render(){

        return(

            <div>
               {this.props.imagens.map((imagem) => {
            return (<div>
              <img src={imagem.imageUrl}/>
              <p>{imagem.name}</p>
              <p>R${imagem.value},00</p>
              <button onClick={() => this.props.adicionar(imagem)}>Adicionar Carrinho</button>
              
            </div>)
          })}   
            </div>
        )

    }
}