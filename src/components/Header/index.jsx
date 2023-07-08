import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import Carrinho from '../NewComponents/Carrinho';
import LogoBranca from "../../img/logo-branca.png";
const Header = () => {
  return (
    <>
      <section>
        <div className="container-header">
          <nav>
            <div className="nav-content">
              <Link to={"/"}> <img src={LogoBranca} width={120} height={120} /> </Link>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Sobre nós</Link>
              <Link to={"/"}>Galeria</Link>
              <Link to={"/"}>Cardápio</Link>
              <Link to={"/"}> <Carrinho /> </Link>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Header;