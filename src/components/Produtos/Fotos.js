import React from 'react'


export default class Fotos extends React.Component {




    render(){
        return(

            <div>
                        <h3>Lista de produtos</h3>
                        {this.props.imagens.map((imagem) => {
                            return (
                            <div>
                                <img src={imagem.imageUrl} />
                                <p>
                                {imagem.name} - R${imagem.value}
                                </p>
                                <button onClick={() => this.adicionarAoCarrinho(imagem)}>
                                Adicionar ao carrinho
                                </button>
                            </div>
                    );
                })}
            </div>
        )
    }
}