import { SalgadosMocks } from '../../src/mock/SalgadosMock.js';
import Header from '../../src/components/Banner/Header/Header.jsx';
import './index.scss';

const Salgados = () => {
  const salgadosFritos = SalgadosMocks.SALGADOSFRITOS_MOCK;
  const salgadosAssados = SalgadosMocks.SALGADOSASSADOS_MOCK;
  const canapes = SalgadosMocks.CANAPES_MOCK;
  const miniSand = SalgadosMocks.MINI_SANDUICHES_MOCK;

  // Filtrar os preços repetidos
  const precoUnicoSalgadosFritos = [...new Set(salgadosFritos.map((i) => i.preco))];
  const precoUnicoSalgadosAssados = [...new Set(salgadosAssados.map((i) => i.preco))];
  const precoUnicoCanapes = [...new Set(canapes.map((i) => i.preco))];
  const precoUnicoMiniSand = [...new Set(miniSand.map((i) => i.preco))];

  return (
    <div>
      <Header />
      <div className="salgados">
        <h1>SALGADOS</h1>
      <div className="salgados__categorias">

        <div className="salgados-card">
          <h2>SALGADOS FRITOS</h2>
          {precoUnicoSalgadosFritos.map((preco, k) => {
            const items = salgadosFritos.filter((item) => item.preco === preco);

            return (
              <div className="salgados-content" key={k}>
                <h3>R$ {preco},00 ({items[0].unidade} unidades)</h3>
                <div className="salgados-content__produtos">
                  {items.map((item, index) => (
                    <div key={index} className="item">
                      <p>{item.nome}</p>
                      <div className="item__buttons">
                        <button className="botao">-</button>
                        <span>0</span>
                        <button className="botao">+</button>
                      </div>
                    </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="salgados-card">
          <h2>SALGADOS ASSADOS</h2>
          {precoUnicoSalgadosAssados.map((preco, k) => {
            const items = salgadosAssados.filter((item) => item.preco === preco);

            return (
              <div className="salgados-content" key={k}>
                <h3>R$ {preco},00 ({items[0].unidade} unidades)</h3>
                <div className="salgados-content__produtos">
                  {items.map((item, index) => (
                      <div key={index} className="item">
                        <p>{item.nome}</p>
                        <div className="item__buttons">
                          <button className="botao">-</button>
                          <span>0</span>
                          <button className="botao">+</button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="salgados-card">
          <h2>CANAPÉS</h2>
          {precoUnicoCanapes.map((preco, k) => {
            const items = canapes.filter((item) => item.preco === preco);

            return (
              <div className="salgados-content" key={k}>
                <h3>R$ {preco},00 ({items[0].unidade} unidades)</h3>
                <div className="salgados-content__produtos">
                  {items.map((item, index) => (
                      <div key={index} className="item">
                        <p>{item.nome}</p>
                        <div className="item__buttons">
                          <button className="botao">-</button>
                          <span>0</span>
                          <button className="botao">+</button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="salgados-card">
          <h2>MINI SANDUÍCHES</h2>
          {precoUnicoMiniSand.map((preco, k) => {
            const items = miniSand.filter((item) => item.preco === preco);

            return (
              <div className="salgados-content" key={k}>
                <h3>R$ {preco}({items[0].unidade} unidades)</h3>
                <div className="salgados-content__produtos">
                  {items.map((item, index) => (
                      <div key={index} className="item">
                        <p>{item.nome}</p>
                        <div className="item__buttons">
                          <button className="botao">-</button>
                          <span>0</span>
                          <button className="botao">+</button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
      </div>
    </div>
  );
}

export default Salgados;
