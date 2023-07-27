import React, { useEffect, useState } from 'react';
import Header from '../../src/components/Banner/Header/Header';
import { FaBars } from 'react-icons/fa';
import ButtonsAddRemove from '../../src/components/Banner/Header/ButtonsAddRemove/produto';
import { useAdicionarPedidos } from '../../src/components/Banner/Header/AdicionarPedidos/AdicionarPedidos';
import './index.scss';
import { UTLEQUIPAMENTOS_MOCK } from '../../src/mock/UtlEquipamentosMock';
import { DESCARTAVEIS_MOCK } from '../../src/mock/DescartaveisMock';


const Cardapio = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLiClick = (index) => {
    setActiveIndex(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleMobileMenuClose = () => {
      if (window.innerWidth < 800 && isMobileMenuOpen) {
        setIsMobileMenuOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleMobileMenuClose);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleMobileMenuClose);
    };
  }, [isMobileMenuOpen]);

  // Mapeamento dos tipos de bebidas e salgados para seus respectivos filtros
  const filters = {
    'Salgados': {
      'Salgados Fritos': data.filter((Salgados) => Salgados.tipo === 'frito'),
      'Salgados Assado': data.filter((Salgados) => Salgados.tipo === 'assado'),
      'Canapés': data.filter((Salgados) => Salgados.tipo === 'canapé'),
      'Mini Sanduíche': data.filter((Salgados) => Salgados.tipo === 'mini sanduíche'),
    },
    'Bebidas': {
      'Café': data.filter((bebida) => bebida.tipo === 'Café'),
      'Refrigerante': data.filter((bebida) => bebida.tipo === 'Refrigerante'),
      'Suco': data.filter((bebida) => bebida.tipo === 'Suco'),
      'Água': data.filter((bebida) => bebida.tipo === 'Água'),
      'Leite': data.filter((bebida) => bebida.tipo === 'Leite'),
      'Chá': data.filter((bebida) => bebida.tipo === 'Chá'),
    },
    'Doces & Bolos': {
      'Doces': data.filter((docesEbolos) => docesEbolos.tipo === 'doce'),
      'Mini bolos': data.filter((docesEbolos) => docesEbolos.tipo === 'mini bolo'),
      'Bolos Artesanais': data.filter((docesEbolos) => docesEbolos.tipo === 'bolo artesanal'),
    },
    'Utensilios, Equipamentos & Descartaveis': {
      'Utensilios & Equipamentos': UTLEQUIPAMENTOS_MOCK,
      'Descartaveis': DESCARTAVEIS_MOCK,
    },
  };

  const { adicionarItem, removerItem } = useAdicionarPedidos();

  return (
    <div className='geralCardapio'>
      <Header />
      <div className='header'>
        <div className='header__title'>
          <h1>CARDAPIO</h1>
        </div>
        <div className='header__abas'>
          {window.innerWidth >= 800 ? (
            <ul className='category-list'>
              {Object.keys(filters).map((key, index) => (
                <li key={index} onClick={() => handleLiClick(index)}>
                  {key}
                </li>
              ))}
            </ul>
          ) : (
            <div className='header__menu-icon' onClick={toggleMobileMenu}>
                <p>CATEGORIAS</p>
                <i class="fa-solid fa-caret-up"></i>
            </div>
          )}
          {isMobileMenuOpen && window.innerWidth < 800 && (
            <ul className='mobile-menu'>
              {Object.keys(filters).map((key, index) => (
                <li key={index} onClick={() => handleLiClick(index)}>
                  {key}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='Cardapio'>
        <div className='Cardapio__card'>
          {Object.values(filters).map((category, index) => (
            <div
              key={`category-${index}`}
              className={`Cardapio__category responsive ${
                index === activeIndex ? 'active' : ''
              }`}
            >
              {Object.entries(category).map(([categoryName, filteredItems]) => (
                <div
                  key={`category-${index}-${categoryName}`}
                  style={{ display: index === activeIndex ? 'grid' : 'none' }}
                >
                  <h1>{categoryName}</h1>
                  <div className='Cardapio__content'></div>
                  <div>
                    {filteredItems.map((product) => (
                      <ButtonsAddRemove
                        key={product.id}
                        data={product}
                        onRemover={removerItem}
                        onAdicionar={adicionarItem}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
