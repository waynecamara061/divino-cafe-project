/* eslint-disable react/prop-types */
import Header from "../../src/components/Banner/Header/Header";
import Produto from "../../src/components/Produto/produto";
import "./index.scss";

export const Bolos = ({ data }) => {
  const mini_bolo = data.filter((bolos) => bolos.tipo === "mini bolo");
  const artesanal = data.filter((bolos) => bolos.tipo === "bolo artesanal")

  return (
    <div>
      <Header />
      <div className="bolos">
        <h1 className="bolos__title">Bolos</h1>
        <div className="bolos__cards">
          <div>
            <h1>Mini Bolo</h1>
            <div className="bolos_itens">
              <div className="bolos__content"></div>
              {mini_bolo.map((product) => (
                <Produto key={product.id} data={product} />
              ))}
            </div>
          </div>
          <div>
            <h1>Bolo Artesanal</h1>
            <div className="bolos_itens">
              <div className="bolos__content"></div>
              {artesanal.map((product) => (
                <Produto key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
