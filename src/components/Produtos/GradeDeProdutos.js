import React from 'react'
import Fotos from './Fotos'


export default class GradeDeProdutos extends React.Component{

  




    render() {

      const listaFiltrada = this.props.imagens.filter((imagem) => {
        console.log("oiiiiii", imagem);
        if (this.props.imagem.value >= this.props.minimoFiltro) {
          return 50;
        } else {
          return 70;
        }
      })
      const lista = this.props.imagens.filter((imagem) => {
        console.log("oiiiiii", imagem);
        if (this.props.imagem.value <= this.props.maximoFiltro) {
          return 50;
        } else {
          return 70;
        }
      })

     

      return(
        <div>
            <div>
          <h3>Lista de produtos</h3>
          {listaFiltrada.map((imagem) => {
            return (
              <div>
                
                <p>
                   R${imagem.value}
                </p>
                
              </div>
            );
          })}
          </div>
          <div>
          <h3>Lista de produtos</h3>
          {lista.map((imagem) => {
            return (
              <div>
                
                <p>
                   R${imagem.value}
                </p>
                
              </div>
            );
          })}
          </div>
        </div>
      )
      
    }
}