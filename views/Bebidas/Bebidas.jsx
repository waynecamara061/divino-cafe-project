import React from 'react';
import './index.scss';
import Header from '../../src/components/Banner/Header/Header';
import BebidasProduct from '../../src/components/Banner/Header/ProductBebidas/produto';
import { useAdicionarPedidos } from '../../src/components/Banner/Header/AdicionarPedidos/AdicionarPedidos'; 
import ModalPedidos from '../../src/components/Banner/Header/modalPedidos/ModalPedidos';
import '../../src/components/Banner/Header/modalPedidos/index.scss';

function Bebidas({ data }) {
  const cafe = data.filter((bebida) => bebida.tipo === 'Café');
  const refrigerante = data.filter((bebida) => bebida.tipo === 'Refrigerante');
  const suco = data.filter((bebida) => bebida.tipo === 'Suco');
  const agua = data.filter((bebida) => bebida.tipo === 'Água');
  const leite = data.filter((bebida) => bebida.tipo === 'Leite');
  const cha = data.filter((bebida) => bebida.tipo === 'Chá');

  const { adicionarItem, removerItem } = useAdicionarPedidos();

  return (
    <div>
      <Header />
      <div className='bebidas'>
        <h1 className='bebidas__title'>BEBIDAS</h1>
        <div className='bebidas__cards'>
          <div>
            <h1>Café</h1>
            <div className='bebidas__content'>
              <div className='bebidas_itens'>
                {cafe.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>Leite</h1>
            <div className='bebidas__content'>
              <div className='bebidas_itens'>
                {leite.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>Refrigerante</h1>
            <div className='bebidas__content'>
              <div className='bebidas_itens'>
                {refrigerante.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>Suco</h1>
            <div className='bebidas__content'>
              <div className='bebidas_itens'>
                {suco.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>Água</h1>
            <div className='bebidas__content'>
              <div className='bebidas_itens last-item'>
                {agua.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>Chá</h1>
            <div className='bebidas__content'>
              <div className='bebidas_itens last-item'>
                {cha.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ModalPedidos adicionarPedidos={useAdicionarPedidos} />
      </div>
    </div>
  );
}

export default Bebidas;
