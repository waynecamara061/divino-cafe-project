import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from '../views/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cardapio from '../views/Cardapio/Cardapio';
import Bebidas from '../views/Bebidas/Bebidas'
import { BEBIDAS_MOCK } from './mock/BebidasMock';
import { useAdicionarPedidos } from './components/Banner/Header/AdicionarPedidos/AdicionarPedidos';
import Site from '../views/Site/Site.jsx';
import { DOCES_MOCK } from './mock/DocesMock';
import Descartaveis from '../views/Descartaveis/Descartaveis';
import { BEBIDAS_MOCK } from './mock/BebidasMock';
import { DESCARTAVEIS_MOCK } from './mock/DescartaveisMock'


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
    element: <Bebidas data={BEBIDAS_MOCK} adicionarPedidos={useAdicionarPedidos}/>,
  },
  {
    path: "/descartaveis",
    element: <Descartaveis data={DESCARTAVEIS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
