import React from 'react'
import './index.scss'
const BebidasProduct = ({data}) => {
  return (
    
    <div className='nameDrinks'>
      <h1 >{data.nome}</h1>
      <div className='nameDrinks__btn'>
        <h1>{data.preco}</h1>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  )
}

export default BebidasProduct