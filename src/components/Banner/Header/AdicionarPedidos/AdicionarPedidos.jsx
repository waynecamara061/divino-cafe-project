import React, { useState, useEffect, useCallback } from 'react';

const AdicionarPedidos = () => {
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

  const [exibirTabela, setExibirTabela] = useState(false);

  // Função para exibir ou ocultar a tabela de pedidos
  const alternarExibicaoTabela = () => {
    setExibirTabela(!exibirTabela);
  };

  const finalizarPedido = useCallback((event) => {
    event.preventDefault();
    // Lógica para enviar o pedido ao finalizar
    console.log('Pedido finalizado:', itensAdicionados);
    // Limpar o estado ou fazer qualquer outra ação necessária
    setItensAdicionados([]);
  }, [itensAdicionados]);

  return (
    { itensAdicionados, adicionarItem, removerItem, exibirTabela, alternarExibicaoTabela, finalizarPedido,}
    
  )
}

export default AdicionarPedidos
