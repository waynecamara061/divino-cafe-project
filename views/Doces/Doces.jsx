import React from 'react';
import './index.scss';
import Header from '../../src/components/Banner/Header/Header';
import Produto from '../../src/components/Produto/produto';
import ProductDoces from '../../src/components/productDoces/ProductDoces';

const Doces = ({ data }) => {
    console.log(data);
    const brigadeiro = data.filter((doce) => doce.tipo === 'brigadeiro');
    const amorEmPedaços = data.filter((doce) => doce.tipo === 'amor em pedaços');
    const quindim = data.filter((doce) => doce.tipo === 'quindim');
    const miniPudim = data.filter((doce) => doce.tipo === 'mini pudim');
    const trouxinha = data.filter((doce) => doce.tipo === 'trouxinha de maça');
    const doce = data.filter((doce) => doce.tipo === 'doce');
    const brigadeiroGourmet = data.filter((doce) => doce.tipo === 'brigadeiro gourmet');
    const brownie = data.filter((doce) => doce.tipo === 'mini brownie');
    const paoDeMel = data.filter((doce) => doce.tipo === 'pão de mel');
    const carolina = data.filter((doce) => doce.tipo === 'carolina');
    const tortinha = data.filter((doce) => doce.tipo === 'mini tortinha');
    const bombom1 = data.filter((doce) => doce.tipo === 'bombom tipo I');
    const bombom2 = data.filter((doce) => doce.tipo === 'bombom tipo II');
    const bombomMorango = data.filter((doce) => doce.tipo === 'bombom de morango');
    const trufa = data.filter((doce) => doce.tipo === 'trufa de chocolate');
    const bemCasado = data.filter((doce) => doce.tipo === 'bem casado');

    return (
        <div>
            <Header />
            <div className='doces'>
                <h1 className='doces__title'>DOCES DIVERSOS</h1>
                <div className='doces__card'>
                    <div>
                        <h1 className='doces__card-title'>Doces</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {brigadeiro.map((product) => (
                                <ProductDoces key={product.id} data={product} />
                            ))}
                        </div>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {doce.map((product) => (
                                <ProductDoces key={product.id} data={product} />
                            ))}
                        </div>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {amorEmPedaços.map((product) => (
                                <ProductDoces key={product.id} data={product} />
                            ))}
                        </div>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {quindim.map((product) => (
                                <ProductDoces key={product.id} data={product} />
                            ))}
                        </div>
                        <h1 className='doces__card-title'>Pão de Mel</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {paoDeMel.map((product) => (
                                <ProductDoces key={product.id} data={product} />
                            ))}
                        </div>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {miniPudim.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {trouxinha.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {brownie.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <h1 className='doces__card-title'>Trufa de Chocolate</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {trufa.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <h1 className='doces__card-title'>Bem casado recheado</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {bemCasado.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1 className='doces__card-title'>Brigadeiro Gourmet</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {brigadeiroGourmet.map((product) => (
                                <ProductDoces key={product.id} data={product} />
                            ))}
                        </div>
                        <h1 className='doces__card-title'>Mini Eclair (Carolinas) Rechadas</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {carolina.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <h1 className='doces__card-title'>Mini tortinha cremosa (massa de biscoito)</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {tortinha.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <h1 className='doces__card-title'>Bombom</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {bombom1.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {bombom2.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                        <h1 className='doces__card-title'>Bombom de Morango (somente na estação)</h1>
                        <div className='doces_itens'>
                            <div className='doces__content'></div>
                            {bombomMorango.map((product) => (
                                <Produto key={product.id} data={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Doces;