import React, { useState } from 'react'
import './style.css'
import Header from '../../src/components/Banner/Header/Header';
import { Link, Navigate } from 'react-router-dom';

function Finalizar() {
    const [counter, setCounter] = useState(0)
    const [valor, setValor] = useState(0)


    const handleClick1 = () => {

        setCounter(counter + 1)
        setValor(valor + 10)
    }

    const handleClick2 = () => {
        if (counter <= 0) {
            return setCounter(0)
        }
        setCounter(counter - 1)
        setValor(valor - 10);
    }

    return (
        <section>
            <Header />
            <div className="form-container">
                <h1>SEU PEDIDO</h1>
                <form className='form-content'>
                    <div className="form-1-field">
                        <h1>Nome:</h1>
                        <input type="text" placeholder='José Avellino Campos' />
                    </div>
                    <div className="form-1-field">
                        <h1>CPF / CNPJ:</h1>
                        <input type="number" placeholder='078.982.192.00' />
                    </div>
                    <div className="form-3-field">
                        <h1>Endereço:</h1>
                        <input type="text" placeholder='Avenida das palmeiras ' />
                        <h1>nº:</h1>
                        <input type="number" placeholder='09' />
                        <h1>CEP:</h1>
                        <input type="number" placeholder='78001-888' />
                    </div>
                    <div className="form-1-field">
                        <h1>Tefelfone:</h1>
                        <input type="number" placeholder='(61) 99999-098' />
                    </div>
                    <div className="form-1-field">
                        <h1>E-mail:</h1>
                        <input type="email" placeholder='Joseavelino@gmail.com' />
                    </div>
                    <div className="form-1-field">
                        <h1>Data do evento:</h1>
                        <input type="date" />
                    </div>
                </form>
                <div className="alert-content">
                    <p>* O frete será cobrado de acordo com a região de entrega; <br />
                        ** Para emissão de nota fiscal, enviar dados completos do solicitante (nome, telefone CPF ou CNPJ e endereço),
                        <br /> via Whatsapp ou e-mail.</p>
                </div>
            </div>
            <section>
                <div className="pedido-section">
                    <h1>Resumo do pedido:</h1>
                    <div className="pedido-container">
                        <div className="pedido-content">
                            <div className="pedido-field">
                                <h1>Pão de queijo</h1>

                                <button
                                    onClick={handleClick1}>+</button>
                                {counter}
                                <button
                                    onClick={handleClick2}>-</button>

                                {`R$: ${counter}`}
                            </div>
                            {/* <div className="pedido-field">
                                <h1>Enroladinho de queijo e presunto</h1>
                                <button
                                    onClick={handleClick1}>+</button>
                                {counter}
                                <button
                                    onClick={handleClick2}>-</button>
                            </div>
                            <div className="pedido-field">
                                <h1>Pastel assado de frango</h1>
                                <button
                                    onClick={handleClick1}>+</button>
                                {counter}
                                <button
                                    onClick={handleClick2}>-</button>
                            </div>
                            <div className="pedido-field">
                                <h1>Empada de frango</h1>
                                <button
                                    onClick={handleClick1}>+</button>
                                {counter}
                                <button
                                    onClick={handleClick2}>-</button>
                            </div>
                            <div className="pedido-field">
                                <h1>Esfiha de carne/frango</h1>
                                <button
                                    onClick={handleClick1}>+</button>
                                {counter}
                                <button
                                    onClick={handleClick2}>-</button>
                            </div> */}
                            <div className='total-content'>
                                <h1>Total: R${counter}</h1>
                                <Link to={"/confirmar"}>
                                    <button>
                                        Finalizar pedido
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Finalizar;