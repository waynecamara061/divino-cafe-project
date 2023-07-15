import React from 'react';
import './index.scss';
import Header from '../../src/components/Banner/Header/Header';
import Produto from '../../src/components/Produto/produto';

const Utensilios = ( {data} ) => {
    const utensilio = data.filter((doce) => doce.tipo === 'utensilio');

    return (
        <div>
            <Header />
            <div className='utensilios'>
                <h1 className='utensilios__title'>UTENSÍLIOS E EQUIPAMENTOS</h1>
                <div className='utensilios__card'>
                    <div>
                        <div className='utensilios_itens'>
                            <div className='utensilios__content'></div>
                            {utensilio.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utensilios;