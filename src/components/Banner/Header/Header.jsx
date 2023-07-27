import React, { useState } from 'react'
import './index.scss'
import { Link } from "react-router-dom";



const Header = () => {

  const [openModal, setOpenModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className='headerComp'>
        <div className='headerComp__component'>
          <Link to={'/'}>
            <img src="../../src/img/logoVazada.svg" alt="" />
          </Link>
          <div className='headerComp__lis'>
            <h1>
              <Link to={'/Site'} className='headerComp__component-text'>
                Home
              </Link>
            </h1>
            <h1 style={{ cursor: 'pointer' }} onClick={() => setOpenModal(true)}>
              Sobre Nós
            </h1>
            <h1>
              <Link to={'/galeria'} className='headerComp__component-text'>
                Galeria
              </Link>
            </h1>
            <h1>
              <Link to={'/cardapio'} className='headerComp__component-text'>
                Cardapio
              </Link>
            </h1>
            <img src="../../src/img/carrinho.svg" alt="" />
          </div>
          {/* Adicione o ícone do menu hamburguer aqui */}
          <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

