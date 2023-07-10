import logo from '../../img/logo-divino.png';
import "./Banner.css"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import banner1 from "../../img/banner1.jpg"
import banner2 from "../../img/banner2.jpg"
import banner3 from "../../img/banner3.jpg"
import banner4 from "../../img/banner4.jpg"

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevCurrent => (prevCurrent + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [banner1, banner2, banner3, banner4];

  return (
    <>
      <div className="carrossel" id="next">
        {images.map((image, index) => (
          <div key={index} className={`item ${index === current ? "active" : ""}`}>
            <img src={image} alt={`banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className='geral'>
        <div className="logo">
          <img src={logo} alt="Logo Divino Café" />
        </div>
        <div className="texto-divino">
          <h1>Bem vindo ao <span>Divino Café & Cia</span></h1>
          <p>Breve descrição sobre o café ou alguma frase que fale sobre o espírito da empresa</p>
        </div>
        <div className="btn">
          <button>SOBRE NÓS</button>
          <button>
            <Link to={`/Cardapio`} id='button-menu'>CARDÁPIO</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
