/* eslint-disable react/prop-types */
import './index.scss'

const Produto = ({ data }) => {
  return (
    
    <div className='nameProduto'>
      <h1 >{data.nome}</h1>
      <div className='nameProduto__btn'>
        <h1>{data.preco}</h1>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div>
  )
}

export default Produto