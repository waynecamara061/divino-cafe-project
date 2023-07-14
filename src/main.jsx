import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from '../views/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cardapio from '../views/Cardapio/Cardapio';
import Site from '../views/Site/Site.jsx';
import Bebidas from '../views/Bebidas/Bebidas'
import Salgados from '../views/Salgados/Salgados';
import { BEBIDAS_MOCK } from './mock/BebidasMock';
import AdicionarPedidos from './components/Banner/Header/AdicionarPedidos/AdicionarPedidos';
import { DOCES_MOCK } from './mock/DocesMock';
import Doces from '../views/Doces/Doces';
import { BOLOS_MOCK } from './mock/BolosMock'
import { Bolos } from '../views/Bolos/Bolos';
import Finalizar from '../views/Finalizar';

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
    path: "/cardapio",
    element: <Cardapio />,
  },
  {
    path: "/bebidas",
    element: <Bebidas data={BEBIDAS_MOCK} adicionarPedidos={AdicionarPedidos}/>,
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
    path: "/finalizar",
    element: <Finalizar />,
  },
  {
    path: "/salgados",
    element: <Salgados />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
