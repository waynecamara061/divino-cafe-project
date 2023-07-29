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
    <div className='name'>
      <h2>{data.nome}</h2>
      <div className='name__btn'>
      {data.precoFatia20a25 && data.precoFatia25a30 ? (
          <div>
            <h2>Preço Fatia 20 a 25 ({data.precofatia20a25})</h2>
            <h2>Preço Fatia 25 a 30 ({data.precoFatia25a30})</h2>
          </div>
        ) : data.precoFesta && data.precoMedio ? (
          <div className='name_preco'>
            <h2>Preço p/Festas ({data.precoFesta})</h2>
            <h2>Preços Médio ({data.precoMedio})</h2>
          </div>
        ) : (
          <h2 className='name__preco'>{data.preco}</h2>
        )}
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
