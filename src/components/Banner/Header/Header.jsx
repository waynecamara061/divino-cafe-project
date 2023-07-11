import React from 'react'
import './index.scss'

const Header = () => {
  return (
    <div className='headerComp'>
        <div className='headerComp__component'>
            <img src="../../src/img/logoVazada.svg" alt="" />
            <h1>Home</h1>
            <h1>Sobre Nós</h1>
            <h1>Galeria</h1>
            <h1>Cardápio</h1>
            <img src="../../src/img/carrinho.svg" alt="" />
        </div>
    </div>
  )
}

export default Header

