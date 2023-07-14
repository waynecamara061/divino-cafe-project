import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={"/finalizar"}>
        <button type="submit">
          Finalizar Pedido
        </button>
      </Link>
    </form>
  );
}

export default TabelaPedidos;
