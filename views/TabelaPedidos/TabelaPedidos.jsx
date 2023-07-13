import React from 'react';

function TabelaPedidos({ pedidos, finalizarPedido }) {
  return (
    <form onSubmit={finalizarPedido}>
      <table>
        <thead>
          <tr>
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
