import React from 'react'
import Header from '../../src/components/Header';
import './index.css';

function Finalize() {
  return (
    <div className='page-finalize-container'>
      <Header />
      <section>
        <div className="form-container">
          <h1>SEU PEDIDO</h1>
          <form>
            <div className="form-content">
              <div className='name-field'>
                <h2>Nome:</h2>
                <input type="text" placeholder='NOME COMPLETO' />
              </div>

              <div className='cpf-field'>
                <h2>Cpf/Cnpj:</h2>
                <input type="text" placeholder='CPF | CNPJ' />
              </div>

              <div className='endereco-field'>

                <div className="endereco-content">
                  <h2>Endereço:</h2>
                  <input type="text" placeholder='ENDEREÇO' />
                </div>

                <div className='field-number'>
                  <h2>Nº:</h2>
                  <input type="text" placeholder='NUMERO' />
                </div>

                <div className='cep-field'>
                  <h2>CEP:</h2>
                  <input type="text" placeholder='CEP' />
                </div>

              </div>

              <div className='telefone-field'>
                <h2>Telefone:</h2>
                <input type="text" placeholder='TELEFONE' />
              </div>

              <div className='email-field'>
                <h2>E-mail:</h2>
                <input type="text" placeholder='E-MAIL' />

              </div>

              <div className='evento-field'>
                <h2>Data do evento:</h2>
                <input type="text" placeholder='DATA DO EVENTO' />
              </div>
              <p>* O frete será cobradode acordo com a região de entrega; <br />
                ** Para emissão de nota fiscal, enviar dados completos do solicitante (nome, telefone CPF ou CNPJ e <br />
                endereço), via Whatsapp ou e-mail.</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Finalize;