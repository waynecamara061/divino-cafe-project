import React from 'react';
import Modal from 'react-modal';
import TabelaPedidos from '../TabelaPedidos/TabelaPedidos';
import { useAdicionarPedidos } from '../AdicionarPedidos/AdicionarPedidos';

Modal.setAppElement('#root');

const ModalPedidos = () => {
  const adicionarPedidos = useAdicionarPedidos();
  console.log(adicionarPedidos.itensAdicionados)
  console.log(adicionarPedidos)
  return (
    <div>
      <button onClick={adicionarPedidos.alternarExibicaoModal}>Abrir Tabela</button>
      <Modal isOpen={adicionarPedidos.exibirModal} onRequestClose={adicionarPedidos.alternarExibicaoModal} className="Modal" overlayClassName="ModalOverlay">
        <h2>Conteúdo do Modal</h2>
        <TabelaPedidos pedidos={adicionarPedidos.itensAdicionados} finalizarPedido={adicionarPedidos.finalizarPedido} />
        <button onClick={adicionarPedidos.alternarExibicaoModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export default ModalPedidos;
