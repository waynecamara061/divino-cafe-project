import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from '../views/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cardapio from '../views/Cardapio/Cardapio';
import Site from '../views/Site/Site.jsx';
import Galeria from '../views/Galeria/Galeria';
import Bebidas from '../views/Bebidas/Bebidas'
import Salgados from '../views/Salgados/Salgados';
import { BEBIDAS_MOCK } from './mock/BebidasMock';
import AdicionarPedidos from './components/Banner/Header/AdicionarPedidos/AdicionarPedidos';
import { DOCES_MOCK } from './mock/DocesMock';
import Doces from '../views/Doces/Doces';
import { BOLOS_MOCK } from './mock/BolosMock'
import { Bolos } from '../views/Bolos/Bolos';
import Finalizar from '../views/Finalizar';
import ConfirmarPedido from '../views/Confirmar';
import Descartaveis from '../views/Descartaveis/Descartaveis';
import { DESCARTAVEIS_MOCK } from './mock/DescartaveisMock';
import Utensilios from '../views/Utensilios/Utensilios';
import { UTLEQUIPAMENTOS_MOCK } from './mock/UtlEquipamentosMock';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/site",
    element: <Site />,
  },
  {
    path: "/galeria",
    element: <Galeria />
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
  {
    path: "/bebidas",
    element: <Bebidas data={BEBIDAS_MOCK} adicionarPedidos={AdicionarPedidos} />,
  },
  {
    path: "/bolos",
    element: <Bolos data={BOLOS_MOCK} />,
  },
  {
    path: "/doces",
    element: <Doces data={DOCES_MOCK} />,
  },
  {
    path: "/salgados",
    element: <Salgados />,
  },
  {
    path: "/finalizar",
    element: <Finalizar />,
  },
  {
    path: "/confirmar",
    element: <ConfirmarPedido />
  },
  {
    path: "/descartaveis",
    element: <Descartaveis data={DESCARTAVEIS_MOCK}/>,
  },
  {
    path: "/utensilios",
    element: <Utensilios data={UTLEQUIPAMENTOS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
