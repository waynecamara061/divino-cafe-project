import { useState } from 'react';
import React from 'react';
import './index.scss';

const BebidasProduct = ({ data, onAdicionar, onRemover }) => {
  const [counter, setCounter] = useState(0);

  const decrementar = () => {
    if (counter > 0) {
      onRemover(data.nome);
      setCounter(counter - 1);
    }
  };

  return (
    <div className='nameDrinks'>
      <h2>{data.nome}</h2>
      <div className='nameDrinks__btn'>
        <h2>{data.preco}</h2>
        <button onClick={decrementar}>-</button>
        <span>{counter}</span>
        <button onClick={() => {
          onAdicionar(data.nome);
          setCounter(counter + 1);
        }}>+</button>
      </div>
    </div>
  );
};

export default BebidasProduct;