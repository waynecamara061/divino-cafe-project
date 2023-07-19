import React from 'react';

function TabelaPedidos({ pedidos, finalizarPedido }) {
  console.log('resultado do map', pedidos)
  return (
    <form onSubmit={finalizarPedido}>
      <table className='tabela'>
        <thead>
          <tr className='tabela'>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.nome}>
              <td>{pedido.nome}</td>
              <td>{pedido.quantidade}</td>
              <td>
                <textarea name={`observacao_${pedido.nome}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Finalizar Pedido</button>
    </form>
  );
}

export default TabelaPedidos;
