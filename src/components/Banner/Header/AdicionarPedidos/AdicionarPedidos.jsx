import React, { useState, useEffect, useCallback } from 'react';

export const useAdicionarPedidos = () => {
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
    console.log('itensAdicionados:', itensAdicionados);
  }, [itensAdicionados]);


  const finalizarPedido = useCallback((event) => {
    event.preventDefault();
    console.log('Pedido finalizado:', itensAdicionados);
    setItensAdicionados([]);
    localStorage.removeItem('itensAdicionados');
  }, [itensAdicionados]);

  const [exibirModal, setExibirModal] = useState(false);

  const alternarExibicaoModal = () => {
    setExibirModal((prevExibirModal) => !prevExibirModal);
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
