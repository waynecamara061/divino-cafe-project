import React, { useEffect, useState } from 'react';
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

  const [itensAdicionados, setItensAdicionados] = useState([]);
  // Função para adicionar um item
  const adicionarItem = (nomeItem) => {
    // Verifica se o item já foi adicionado
    const itemExistente = itensAdicionados.find((item) => item.nome === nomeItem);

    if (itemExistente) {
      // Se o item já existe, atualiza a quantidade
      const novosItens = itensAdicionados.map((item) => {
        if (item.nome === nomeItem) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }
        return item;
      });

      setItensAdicionados(novosItens);
    } else {
      // Se o item não existe, adiciona um novo item ao array
      setItensAdicionados([
        ...itensAdicionados,
        {
          nome: nomeItem,
          quantidade: 1,
        },
      ]);
    }
  };

  // Função para remover um item
  const removerItem = (nomeItem) => {
    const novosItens = itensAdicionados.map((item) => {
      if (item.nome === nomeItem) {
        return {
          ...item,
          quantidade: item.quantidade - 1, // Altere o sinal de + para -
        };
      }
      return item;
    });
  
    // Remova os itens com quantidade zero
    const itensFiltrados = novosItens.filter((item) => item.quantidade > 0);
  
    setItensAdicionados(itensFiltrados);
  };

  useEffect(() => {
    console.log(itensAdicionados);
  }, [itensAdicionados]);
  
  return (
    <div>
      <Header />
      <div className='bebidas'>
        <h1 className='bebidas__title'>BEBIDAS</h1>
        <div className='bebidas__cards'>
          <div>
            <h1>Café</h1>
            <div className='bebidas__content'></div>
            <div className='bebidas_itens'>
                {cafe.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Leite</h1>
            <div className='bebidas__content'></div>
            <div className='bebidas_itens'>
                {leite.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Refrigerante</h1>
            <div className='bebidas__content'></div>
            <div className='bebidas_itens'>
                {refrigerante.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Suco</h1>
            <div className='bebidas__content'></div>
            <div className='bebidas_itens'>
                {suco.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Água</h1>
            <div className='bebidas__content'></div>
            <div className='bebidas_itens last-item'>
                {agua.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
          <div>
            <h1>Chá</h1>
            <div className='bebidas__content'></div>
            <div className='bebidas_itens last-item'>
                {cha.map((product) => (
                  <BebidasProduct key={product.id} data={product} onRemover={removerItem} onAdicionar={adicionarItem} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bebidas;