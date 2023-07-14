import "./index.scss";
import { Link } from "react-router-dom";
import React from 'react';
import salgadosImg from '../../src/assets/salgados.png';
import docesImg from '../../src/assets/doces.png';
import bolosImg from '../../src/assets/bolos.png';
import bebidasImg from '../../src/assets/bebidas.png';
import utensiliosImg from '../../src/assets/utensilios.png';
import descartaveisImg from '../../src/assets/descartaveis.png';
import Header from "../../src/components/Banner/Header/Header";

const Cardapio = () => {
    return (
        <div className='cardapio'>
            <Header />
            <h1 className="cardapio__titulo">CARDÁPIO</h1>
            <div className="cardapio__menus">
                <div className="cardapio__menus-card">
                    <Link to='/salgados'><img className="cardapio__menus-img" src={salgadosImg} alt="salgadosImg" /></Link>
                    <h2 className="cardapio__subMenu">Salgados</h2>
                </div>
                <div className="cardapio__menus-card">
                    <Link to={`/Doces`}><img className="cardapio__menus-img" src={docesImg} alt="salgadosImg" /></Link>
                    <h2 className="cardapio__subMenu">Doces</h2>
                </div>
                <div className="cardapio__menus-card">
                    <Link to={`/Bolos`}><img className="cardapio__menus-img" src={bolosImg} alt="salgadosImg" /></Link>
                    <h2 className="cardapio__subMenu">Bolos</h2>
                </div>
                <div className="cardapio__menus-card">
                    <Link to={'/Bebidas'}><img className="cardapio__menus-img" src={bebidasImg} alt="salgadosImg" /></Link>
                    <h2 className="cardapio__subMenu">Bebidas</h2>
                </div>
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={utensiliosImg} alt="salgadosImg" />
                    <h2 className="cardapio__subMenu">Utensílios e <br></br>Equipamentos</h2>
                </div>
                <div className="cardapio__menus-card">
                    <img className="cardapio__menus-img" src={descartaveisImg} alt="salgadosImg" />
                    <h2 className="cardapio__subMenu">Descartáveis</h2>
                </div>
            </div>


            <p className="cardapio__info">*Imagens meramente ilustrativas</p>
        </div>
    )
}

export default Cardapio