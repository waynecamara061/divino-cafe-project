import { useState, useEffect } from 'react';
import React from 'react';
import './index.scss';

const ButtonsAddRemove = ({ data, onAdicionar, onRemover }) => {
  const initialValue = parseInt(localStorage.getItem(`counter_${data.nome}`)) || 0;
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(`counter_${data.nome}`, counter.toString());
  }, [counter, data.nome]);

  const decrementar = () => {
    if (counter > 0) {
      onRemover(data.nome);
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className='nameDrinks'>
      <h2>{data.nome}</h2>
      <div className='nameDrinks__btn'>
        <h2>{data.preco}</h2>
        <button onClick={decrementar}>-</button>
        <span>{counter}</span>
        <button
          onClick={() => {
            onAdicionar(data.nome);
            setCounter((prevCounter) => prevCounter + 1);
          }}
        >+</button>
      </div>
    </div>
  );
};

export default ButtonsAddRemove;
