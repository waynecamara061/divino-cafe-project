import logo from '../../src/img/logo-divino.svg';
import "./index.scss"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import banner from '../../src/img/banner.svg'
import banner2 from "../../src/img/banner2.jpg"
import banner3 from "../../src/img/banner3.png"
import banner4 from "../../src/img/banner4.jpg"

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevCurrent => (prevCurrent + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [banner, banner2, banner3, banner4];

  return (
    <>
      <div className="carrossel" id="next">
        {images.map((image, index) => (
          <div key={index} className={`carrossel__item ${index === current ? "active" : ""}`}>
            <img src={image} alt={`carrossel__banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className='carrossel__geral'>
        <div className="carrossel__logo">
          <img src={logo} alt="Logo Divino Café" />
        </div>
        <div className="carrossel__texto-divino">
          <h1>Bem vindo ao <strong>Divino Café & Cia</strong></h1>
          <p>Breve descrição sobre o café ou alguma frase que fale sobre o espírito da empresa</p>
        </div>
        <div className="carrossel__btn">
          <button>
            <Link to={`/Site`} className='carrossel__button-menu'>ENTRAR</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home