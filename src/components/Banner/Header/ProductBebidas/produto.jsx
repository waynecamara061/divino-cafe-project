import React from 'react'
import './index.scss'
const BebidasProduct = ({data, onAdicionar, onRemover}) => {
  return (
    
    <div className='nameDrinks'>
      <h1 >{data.nome}</h1>
      <div className='nameDrinks__btn'>
        <h1>{data.preco}</h1>
        <button  onClick={() => onRemover(data.nome)}>-</button>
        <span>0</span>
        <button onClick={() => onAdicionar(data.nome)}>+</button>
      </div>
    </div>
  )
}

export default BebidasProduct