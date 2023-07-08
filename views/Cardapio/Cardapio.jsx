import "./index.scss";
import React from 'react';
import Banner from '../../src/components/Banner/Banner';
import salgadosImg from '../../src/assets/salgados.png';
import docesImg from '../../src/assets/doces.png';
import bolosImg from '../../src/assets/bolos.png';
import bebidasImg from '../../src/assets/bebidas.png';
import utensiliosImg from '../../src/assets/utensilios.png';
import descartaveisImg from '../../src/assets/descartaveis.png';

const Cardapio = () => {
    return (
        <div id='cardapio'>
            <Banner />
            <h1 id="cardapio_titulo">CARDÁPIO</h1>

            <div id="cardapio__menus">
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={salgadosImg} alt="salgadosImg" />
                    <h2 className="sub-menu">Salgados</h2>
                </div>
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={docesImg} alt="salgadosImg" />
                    <h2 className="sub-menu">Doces</h2>
                </div>
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={bolosImg} alt="salgadosImg" />
                    <h2 className="sub-menu">Bolos</h2>
                </div>
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={bebidasImg} alt="salgadosImg" />
                    <h2 className="sub-menu">Bebidas</h2>
                </div>
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={utensiliosImg} alt="salgadosImg" />
                    <h2 className="sub-menu">Utensílios e Equipamentos</h2>
                </div>
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={descartaveisImg} alt="salgadosImg" />
                    <h2 className="sub-menu">Descartáveis</h2>
                </div>
            </div>

            <p id="info">*Imagens meramente ilustrativas</p>
        </div>
    )
}

export default Cardapio