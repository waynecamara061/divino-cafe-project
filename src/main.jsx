import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from '../views/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cardapio from '../views/Cardapio/Cardapio';
import Bebidas from '../views/Bebidas/Bebidas'
import Salgados from '../views/Salgados/Salgados';
import { DOCES_MOCK } from './mock/DocesMock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
  {
    path: "/bebidas",
    element: <Bebidas />,
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
