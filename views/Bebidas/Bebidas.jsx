import React from 'react';
import './index.scss';
import Header from '../../src/components/Banner/Header/Header';
import BebidasProduct from '../../src/components/Banner/Header/ProductBebidas/produto';

function Bebidas({ data }) {
  const cafe = data.filter((bebida) => bebida.tipo === 'Café');
  const refrigerante = data.filter((bebida) => bebida.tipo === 'Refrigerante');
  const suco = data.filter((bebida) => bebida.tipo === 'Suco');
  const agua = data.filter((bebida) => bebida.tipo === 'Água');
  const leite = data.filter((bebida) => bebida.tipo === 'Leite')
  const cha = data.filter((bebida) => bebida.tipo === 'Chá')
  
  return (
    <div>
      <Header />
      <div className='bebidas'>
        <h1 className='bebidas__title'>BEBIDAS</h1>
        <div className='bebidas__cards'>
          <div>
            <h1>Café</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {cafe.map((product) => (
                  <BebidasProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Leite</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {leite.map((product) => (
                  <BebidasProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Refrigerante</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {refrigerante.map((product) => (
                  <BebidasProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Suco</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {suco.map((product) => (
                  <BebidasProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Água</h1>
            <div className='bebidas_itens last-item'>
              <div className='bebidas__content'></div>
                {agua.map((product) => (
                  <BebidasProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Chá</h1>
            <div className='bebidas_itens last-item'>
              <div className='bebidas__content'></div>
                {cha.map((product) => (
                  <BebidasProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bebidas;