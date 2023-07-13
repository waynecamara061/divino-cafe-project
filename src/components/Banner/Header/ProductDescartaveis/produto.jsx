import React from 'react'
import './index.scss'
const DescartaveisProduct = ({data}) => {
  return (
    
    <div className='nameDescartaveis'>
      <h1 >{data.nome}</h1>
      <div className='nameDescartaveis__btn'>
        <h1>{data.preco}</h1>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  )
}

export default DescartaveisProduct