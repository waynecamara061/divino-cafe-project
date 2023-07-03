import logo from '../../img/logo-divino.png';
import "./Banner.css"
import { Link } from "react-router-dom";
import banner1 from "../../img/banner1.jpg"
import banner2 from "../../img/banner2.jpg"
import banner3 from "../../img/banner3.jpg"
import banner4 from "../../img/banner4.jpg"

const Banner = () => {
  return (
      <>
      <div className="carrosel" id="next">
        <div className="container-banner" id="img">
          <img src={banner1} alt="banner 1" />
          <img src={banner2} alt="banner 2" />
          <img src={banner3} alt="banner 3" />
          <img src={banner4} alt="banner 4" />
        </div>
      </div>
          <div className="logo">
            <img src={logo} alt="Logo Divino Café" />
          </div>

          <div className="texto-divino">
            <h1>Bem vindo ao <span>Divino Café & Cia</span></h1>

            <p>Breve descrição sobre o café ou alguma frase que fale sobre o espírito
              da empresa
            </p>
          </div>
        
          <div className="btn">
              <button>SOBRE NÓS</button>

              <button>
                <Link to={`/menu`} id='button-menu'>CARDÁPIO</Link>
              </button>
          </div>
     </>
  )
}

export default Banner