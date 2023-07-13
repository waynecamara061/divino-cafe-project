import React from 'react'
import Header from '../../src/components/Banner/Header/Header'
import { Link } from "react-router-dom";
import './index.scss';

const Site = () => {
  return (
    <div>
        <Header />
        <div className='nServicos'>
            <h1>
NOSSOS SERVIÇOS
            </h1>
            <h2>
Coffe Break
            </h2>
            <h3>
Intervalo estratégico em reuniões, seminários, cursos ou congressos,<br></br>
proporcionando um momento valaioso de networkin.
            </h3>
            <h2>
Coquetéis
            </h2>
            <h3>
Proporciona um momento de descontração e valorização do seu evento, <br></br>
produto, ou serviço junto aos seus clientes e colaboradores.
            </h3>

        </div>
        <div className='nLinks'>
            <h1>
                ACOMPANHE A DIVINO
            </h1>
            <div className='nLinks__links'>
                <a href="http://linkedin.com/company/divinocafeecia/" ><img src="../../src/assets/pngwing 2.png"></img>   divinocafeecia</a>
                <a href="http://instagram.com/divinocafeecia/" ><img src="../../src/assets/pngwing 1.png"></img>   divinocafeecia</a>
            </div>
        </div>
        <div className='nOrcamento'>
            <h1>ORÇAMENTO</h1>
            <Link to={'/cardapio'}>
                <button>
                    Solicite seu orçamento AQUI!
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Site