import React from 'react';
import './index.scss';
import Header from '../../src/components/Banner/Header/Header';
import ButtonsAddRemove from '../../src/components/Banner/Header/ButtonsAddRemove/produto';
import { useAdicionarPedidos } from '../../src/components/Banner/Header/AdicionarPedidos/AdicionarPedidos';

function Descartaveis({ data }) {
  const copo = data.filter((descartaveis) => descartaveis.tipo === 'Copos');
  const guardanapo = data.filter((descartaveis) => descartaveis.tipo === 'Guardanapos');
  const colheres = data.filter((descartaveis) => descartaveis.tipo === 'Colheres');
  const misturadores = data.filter((descartaveis) => descartaveis.tipo === 'Misturadores');
  
  const { adicionarItem, removerItem } = useAdicionarPedidos();
  
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
                  <ButtonsAddRemove key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Guardanapo</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {guardanapo.map((product) => (
                  <ButtonsAddRemove key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Colheres</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {colheres.map((product) => (
                  <ButtonsAddRemove key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Misturadores</h1>
            <div className='bebidas_itens'>
              <div className='bebidas__content'></div>
                {misturadores.map((product) => (
                  <ButtonsAddRemove key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Descartaveis;