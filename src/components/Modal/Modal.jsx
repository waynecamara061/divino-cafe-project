import React from 'react'
import './index.scss'

export default function Modal({ isOpen, setModalOpen, children }) {
    if (isOpen) {
      return (
        <div className='modalBG'>
          <div className='modalBG__modal'>
            <div className='modalBG__modal-fechar' onClick={setModalOpen}>
            <img src="../../src/assets/wrong 1.png" alt="" />
            </div>
            <img className='modalBG__modal-logo' src="../src/img/logoVazada.svg"/>
            <div className='modalBG__modal-text'>
                Somos uma empresa familiar com fornecimento de produtos artesanais para realização de pequenos eventos in-company e particulares.<br></br>
                Especialistas em realização de coffe breaks para congressos, treinamentos, convenções, workshops, entre outros.
            </div>
                <img className='modalBG__modal-equipe' src="../../src/assets/equipe.png" alt="" />
            </div>
            
        </div>
      )
    }
  
    return null
  }