import React from 'react';
import './index.scss';
import Header from '../../src/components/Banner/Header/Header';
import DescartaveisProduct from '../../src/components/Banner/Header/ProductDescartaveis/produto';

function Descartaveis({ data }) {
  const copo = data.filter((descartaveis) => descartaveis.tipo === 'Copos');
  const guardanapo = data.filter((descartaveis) => descartaveis.tipo === 'Guardanapos');
  const colheres = data.filter((descartaveis) => descartaveis.tipo === 'Colheres');
  const misturadores = data.filter((descartaveis) => descartaveis.tipo === 'Misturadores');
  
  
  return (
    <div>
      <Header />
      <div className='descartaveis'>
        <h1 className='descartaveis__title'>DESCARTÁVEIS</h1>
        <div className='descartaveis__cards'>
          <div>
            <h1>Copos</h1>
            <div className='descartaveis_itens'>
              <div className='descartaveis__content'></div>
                {copo.map((product) => (
                  <DescartaveisProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Guardanapo</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {guardanapo.map((product) => (
                  <DescartaveisProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Colheres</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {colheres.map((product) => (
                  <DescartaveisProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
          <div>
            <h1>Misturadores</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {misturadores.map((product) => (
                  <DescartaveisProduct key={product.id} data={product} />
                ))}
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Descartaveis;