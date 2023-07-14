import React from 'react';
import Modal from 'react-modal';
import TabelaPedidos from '../TabelaPedidos/TabelaPedidos';
import useAdicionarPedidos from '../AdicionarPedidos/AdicionarPedidos';

const ModalPedidos = () => {
  const { itensAdicionados, finalizarPedido, alternarExibicaoModal, exibirModal } = useAdicionarPedidos();

  return (
    <div>
    <button onClick={alternarExibicaoModal}>Abrir Tabela</button>
      <Modal isOpen={exibirModal} onRequestClose={alternarExibicaoModal} className="Modal" overlayClassName="ModalOverlay">
        <h2>Conteúdo do Modal</h2>
        <TabelaPedidos pedidos={itensAdicionados} finalizarPedido={finalizarPedido} />
        <button onClick={finalizarPedido}>Fechar</button>
      </Modal>
    </div>
  );
}

export default ModalPedidos;
