import React from 'react';
import './index.scss';

const ProductDoces = ({ data }) => {

  return (
    <div className='nomeDoces'>
      <h1 className='nomeDoces__h1'>{data.nome}</h1>
      <div className='nomeDoces__button'>
        <div className='tamanhoFesta'>
          <h1 className='tamanhoFesta-nome'>Tamanho Festa: </h1>
          <h2>{data.precoFesta}</h2>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <div className='tamanhoMedio'>
          <h1>Tamanho Médio: </h1>
          <h2>{data.precoMedio}</h2>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>

      </div>
    </div>
  )
}

export default ProductDoces;