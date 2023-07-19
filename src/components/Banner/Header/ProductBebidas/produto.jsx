<<<<<<< HEAD
import { useState, useEffect } from 'react';
import React from 'react';
import './index.scss';

const BebidasProduct = ({ data, onAdicionar, onRemover }) => {
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
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BebidasProduct;
=======
import React from 'react'
import './index.scss'
const BebidasProduct = ({data}) => {
  return (
    
    <div className='nameDrinks'>
      <h1 >{data.nome}</h1>
      <div className='nameDrinks__btn'>
        <h1>{data.preco}</h1>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  )
}

export default BebidasProduct
>>>>>>> 7d1c03a9d455856f3de678ff44b28cbe3a162861
