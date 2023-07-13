import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from '../views/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cardapio from '../views/Cardapio/Cardapio';
import Bebidas from '../views/Bebidas/Bebidas'
import { BEBIDAS_MOCK } from './mock/BebidasMock';
import AdicionarPedidos from './components/Banner/Header/AdicionarPedidos/AdicionarPedidos';
import { DOCES_MOCK } from './mock/DocesMock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
  {
    path: "/bebidas",
    element: <Bebidas data={BEBIDAS_MOCK} adicionarPedidos={AdicionarPedidos}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
