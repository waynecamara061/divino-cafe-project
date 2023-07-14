import React, { useState, useEffect, useCallback } from 'react';

export const useAdicionarPedidos = () => {
  const [itensAdicionados, setItensAdicionados] = useState([]);

  useEffect(() => {
    const storedItens = localStorage.getItem('itensAdicionados');
    if (storedItens) {
      setItensAdicionados(JSON.parse(storedItens));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('itensAdicionados', JSON.stringify(itensAdicionados));
    console.log('itensAdicionados atualizados:', itensAdicionados);
  }, [itensAdicionados]);

  const adicionarItem = (nomeItem) => {
    const itemExistente = itensAdicionados.find((item) => item.nome === nomeItem);

    if (itemExistente) {
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
      setItensAdicionados([
        ...itensAdicionados,
        {
          nome: nomeItem,
          quantidade: 1,
        },
      ]);
    }
  };

  const removerItem = (nomeItem) => {
    const novosItens = itensAdicionados.map((item) => {
      if (item.nome === nomeItem) {
        return {
          ...item,
          quantidade: item.quantidade - 1,
        };
      }
      return item;
    });

    const itensFiltrados = novosItens.filter((item) => item.quantidade > 0);

    setItensAdicionados(itensFiltrados);
  };

  const finalizarPedido = useCallback((event) => {
    event.preventDefault();
    console.log('Pedido finalizado:', itensAdicionados);
    setItensAdicionados([]);
    localStorage.removeItem('itensAdicionados');
  }, [itensAdicionados]);

  console.log('itensAdicionados inicial:', itensAdicionados);
  
  const [exibirModal, setExibirModal] = useState(false);

  const alternarExibicaoModal = () => {
    setExibirModal(!exibirModal);
  };

  return {
    exibirModal,
    itensAdicionados,
    adicionarItem,
    removerItem,
    finalizarPedido,
    alternarExibicaoModal,
  };
};

export default useAdicionarPedidos