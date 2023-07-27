import React from 'react'
import './index.scss'
const BebidasProduct = ({data, onAdicionar, onRemover}) => {
  return (
    
    <div className='nameDrinks'>
      <h2>{data.nome}</h2>
      <div className='nameDrinks__btn'>
        <h2>{data.preco}</h2>
        <button  onClick={() => onRemover(data.nome)}>-</button>
        <span>0</span>
        <button onClick={() => onAdicionar(data.nome)}>+</button>
      </div>
    </div>
  )
}

export default BebidasProduct